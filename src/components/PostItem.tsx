import { useNavigate } from "react-router";
import { PostItemType } from "@/types/types";
import { MyButton } from "./UI/button/MyButton";

export const PostItem: React.FC<PostItemType> = (props) => {
  const {
    post: { id, title, body },
    number,
    deletePost
  } = props;

  const navigate = useNavigate();

  const goToPost = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className='post'>
      <div className='post__container'>
        <strong>{id}. {title}</strong>
        <div>
          {body}
        </div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => goToPost(id)}>Открыть</MyButton>
        <MyButton onClick={() => deletePost(id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
