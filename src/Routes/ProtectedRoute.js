import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <Navigate to="/login" state={{ prevtPath: children.props.location.pathname }} />
    );
  }

  return children;
};


export default MyRoute;