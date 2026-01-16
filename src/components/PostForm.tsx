import { useState } from "react";
import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";
import { PostFormType } from "@/types/types";

export const PostForm: React.FC<PostFormType> = ({ create }) => {

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!post.body || !post.title) return;

    create({ ...post, id: Date.now() });
    setPost({ title: '', body: '' });
  };

  const addTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost(state => ({ ...state, title: e.target.value }));
  };

  const addDecription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost(state => ({ ...state, body: e.target.value }));
  };
  
  return (
    <form>
      <MyInput
        type="text"
        placeholder='Название поста'
        value={post.title}
        onChange={addTitle} />
      <MyInput
        type="text"
        placeholder='Описание поста'
        value={post.body}
        onChange={addDecription} />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};