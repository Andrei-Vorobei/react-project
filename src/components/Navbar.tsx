import { Link } from "react-router";
import { MyButton } from "./UI/button/MyButton";
import { useContext } from "react";
import { AuthContext } from "@/context";

export const Navbar: React.FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className='navbar'>
      <MyButton
        onClick={logout}
      >
        Выйти
      </MyButton>
      {isAuth && (
        <div className="links-block">
          {/* <div>
            <Link to='/'>HOME</Link>
          </div> */}
          <div>
            <Link to='about'>ABOUT</Link>
          </div>
          <div>
            <Link to='posts'>POSTS</Link>
          </div>
        </div>
      )}
    </div>
  );
};