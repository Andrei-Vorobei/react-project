import '@/styles/App.scss';

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router';

import { About } from '@/pages/About';
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

