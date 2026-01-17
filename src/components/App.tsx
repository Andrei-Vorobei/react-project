import '@/styles/App.scss';

import { Outlet } from 'react-router';

import { Navbar } from './Navbar';


export const App: React.FC = () => {

  return (
    <div className='container'>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

