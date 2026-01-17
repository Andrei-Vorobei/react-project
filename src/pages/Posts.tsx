import '@/styles/App.scss';
import { useEffect, useMemo, useRef, useState } from 'react';

import { FilterType, ItemType } from '@/types/types';

import { PostList } from '@/components/PostList';
import { PostForm } from '@/components/PostForm';
import { PostFilter } from '@/components/PostFilter';
import { MyModal } from '@/components/UI/modal/MyModal';
import { MyButton } from '@/components/UI/button/MyButton';
import { Loader } from '@/components/UI/loader/Loader';
import { Pagination } from '@/components/UI/pagination/Pagination';

import { PostService } from '@/API/PostService';

import { usePosts } from '@/hooks/usePosts';
import { useFetching } from '@/hooks/useFetching';

import { getPageCount } from '@/utils/pages';
import { useObserver } from '@/hooks/useObserver';
import { MySelect } from '@/components/UI/select/MySelect';

export const Posts: React.FC = () => {
  const [posts, setPosts] = useState<ItemType[]>([]);
  const [filter, setFilter] = useState<FilterType>({ sort: '', search: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef(null);
  console.log('lastElement: ', lastElement);

  const skip = useMemo(() => {
    return (page - 1) * limit;
  }, [page, limit]);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  const [ fetchPosts, isPostsLoading, postError ] = useFetching( async () => {
    const data = await PostService.getAll(limit, skip);
    // console.log('data: ', data);
    setPosts(state => [...state, ...data.posts]);
    setTotalPages(getPageCount(data.total, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(state => ++state);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (post: ItemType) => {
    setPosts((state) => [...state, post]);
    setIsOpen(false);
  };
  const deletePost = (id: number) => {
    setPosts(state => {
      const newState = state.filter(item => item.id !== id);
      return newState;
    });
  };

  return (
    <div className='App'>
      <div className='posts'>
        <MyButton
          onClick={() => setIsOpen(true)}
        >
          Создать пост
        </MyButton>
        <MyModal
          visible={isOpen}
          setVisible={setIsOpen}
        >
          <PostForm create={createPost} />
        </MyModal>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {/* <MySelect
          value={limit}

        /> */}
        {postError && (
          <h1>Ошибка запроса: {postError}</h1>
        )}
        <PostList
          deletePost={deletePost}
          posts={sortedAndSearchedPosts}
          title='Рандомные посты'
        />
        <div ref={lastElement} style={{ height: 20, backgroundColor: 'red',  }}></div>
        {isPostsLoading && <Loader />}
        <Pagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
