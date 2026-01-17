import { PostService } from "@/API/PostService";
import { Loader } from "@/components/UI/loader/Loader";
import { useFetching } from "@/hooks/useFetching";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

type CommentType = {
  body: string;
  id: number;
}

type CommentsType = {
  comments: CommentType[]
}

export const PostPage: React.FC = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState<CommentsType>(null);

  const location = useLocation();
  const params = useParams();
  console.log('location: ', location);
  console.log('params: ', params);

  const [ fetchPost, isLoadingPost, errorPost ] = useFetching( async () => {
    const data = await PostService.getById(params.id);
    setPost(data);
  });

  const [ fetchPostComments, isLoadingComments, errorComments ] = useFetching( async () => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPost();
    fetchPostComments();
  }, [params.id]);

  // console.log('post: ', post);
  // console.log('comments: ', comments);
  return (
    <div>
      {isLoadingPost ? (
        <Loader />
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>{post?.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <p style={{ maxWidth: 800 }}>
              {post?.body}
            </p>
          </div>
          <div style={{ padding: '10px 0', maxWidth: 800, margin: 'auto' }}>
            <h3>Комментарии:</h3>
          </div>
          <div style={{ maxWidth: 800, margin: 'auto' }}>
            {comments?.comments.map(item => (
              <p key={item.id}>{item.body}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};