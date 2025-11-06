import React from 'react';

const LoginButton = () => {
  return (
    <button className="flex items-center hover:bg-gray-300 cursor-pointer bg-gray-200 font-semibold rounded-md py-2.5 px-4 border border-gray-100">
      <span className="text-lg ml-2">Login</span>
    </button>
  );
};

export default LoginButton;
