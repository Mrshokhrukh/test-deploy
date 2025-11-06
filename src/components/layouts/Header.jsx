import { User } from 'lucide-react';
import React from 'react';
import LoginButton from '../libs/LoginButton';
import { useSelector } from 'react-redux';
import UserAvatar from '../libs/UserAvatar';

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div className="py-2 px-4 flex items-center justify-between border-b border-gray-400">
      <div className="text-2xl font-bold"> Dashboard </div>
      {isAuthenticated ? <UserAvatar user={user} /> : <LoginButton />}
    </div>
  );
};

export default Header;
