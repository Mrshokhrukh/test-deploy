import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header';

const App = () => {
  return (
    <div className="flex h-screen p-2">
      <Sidebar />
      <div className='flex-1'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
