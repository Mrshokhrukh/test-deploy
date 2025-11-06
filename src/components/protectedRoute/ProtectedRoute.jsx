import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthed = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthed) {
    return <Navigate to={'/login'} replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
