import { FormEventHandler, useContext } from "react";
import { MyButton } from "@/components/UI/button/MyButton";
import { MyInput } from "@/components/UI/input/MyInput";
import { AuthContext } from "@/context";

export const Login: React.FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Страница login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton
          onClick={() => {}}
        >
          Войти
        </MyButton>
      </form>
    </div>
  );
};