import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.auth.user);

  console.log(user);

  return user ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
