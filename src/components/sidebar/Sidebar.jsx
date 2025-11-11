import {
  BookOpenCheck,
  Database,
  FileUpIcon,
  Folder,
  Home,
  HomeIcon,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Upload,
  User2,
  X,
} from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { closeSidebar, openSidebar } from '../../redux/sidebarSlice';
import { logoutUser } from '../../redux/authSlice';

const sidebar = [
  {
    path: '/dashboard/',
    title: 'Dashboard',
    Icon: <Database />,
  },
  {
    path: '/dashboard/home',
    title: 'Home',
    Icon: <HomeIcon />,
  },
  {
    path: '/dashboard/users',
    title: 'Users',
    Icon: <User2 />,
  },
  {
    path: '/dashboard/products',
    title: 'Products',
    Icon: <Folder />,
  },
  {
    path: '/dashboard/posts',
    title: 'Posts',
    Icon: <FileUpIcon />,
  },
  {
    path: '/dashboard/todos',
    title: 'Todos',
    Icon: <Settings />,
  },
  {
    title: 'Logout',
    Icon: <LogOut />,
  },
];

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSidbar = (action) => {
    switch (action) {
      case 'open':
        dispatch(openSidebar());
        break;
      case 'close':
        dispatch(closeSidebar());
        break;
    }
  };

  const handleSidebarItem = (item) => {
    if (item.title == 'Logout') {
      dispatch(logoutUser());
      navigate('/login');
    }
  };

  return (
    <div
      className={`${
        isOpen ? 'w-[350px]' : 'w-[120px]'
      } p-6 sticky top-0 border-r border-r-gray-300 pt-16 transition-all duration-300`}
    >
      <button
        onClick={() => toggleSidbar(isOpen ? 'close' : 'open')}
        className="absolute right-2 text-sm top-2  p-2 rounded-md bg-gray-100 cursor-pointer"
      >
        {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
      </button>

      <h1 className="flex justify-center gap-2 items-center text-2xl py-3 bg-indigo-200 text-blue-500 font-semibold px-4 rounded-md">
        <Database /> {isOpen && <span>Dashboard</span>}
      </h1>

      <div className="px-2 mt-6 space-y-3">
        {sidebar.map((item, index) => {
          return (
            <NavLink
              to={`${item.path}`}
              onClick={() => handleSidebarItem(item)}
              key={index}
              className={`flex items-center gap-2 bg-gray-100 rounded-md py-4 px-4 hover:bg-gray-200`}
            >
              <span> {item.Icon} </span>
              {isOpen && <span> {item.title} </span>}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
