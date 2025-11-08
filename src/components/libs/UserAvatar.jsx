import React from 'react';

const UserAvatar = ({ user }) => {
  const formatNameByEmail = (email) => {
    if (!email) return 'unknown';
    const index = email.indexOf('@');
    const name = email.slice(0, index);
    return name;
  };

  return (
    <div>
      <h2 className="font-semibold py-1 px-2 bg-gray-200 rounded-md">
        {user && formatNameByEmail(user.email)}
      </h2>
    </div>
  );
};

export default UserAvatar;
