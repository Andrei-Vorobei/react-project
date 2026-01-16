import { PostListType } from "@/types/types";
import { PostItem } from "./PostItem";

export const PostList: React.FC<PostListType> = ({
  posts,
  title,
  deletePost
}) => {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
    );
  };

  return (
    <>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
        {posts.map((item, indx) => (
              <PostItem
                key={item.id}
                post={item}
                number={indx + 1}
                deletePost={deletePost}
              />
        ))}
    </>
  );
};