import { Link } from "react-router";

export const Navbar: React.FC = () => {

  return (
    <div className='navbar'>
      <div>
        <div>
          <Link to='/'>HOME</Link>
        </div>
        <div>
          <Link to='about'>ABOUT</Link>
        </div>
        <div>
          <Link to='posts'>POSTS</Link>
        </div>
      </div>
    </div>
  );
};