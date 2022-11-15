import React from 'react';

import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { toastNotify } from '../helper/Toastify';

const PrivateRouter = () => {
  let currentUser = sessionStorage.getItem('username') || false;
  let location = useLocation();

  if (!currentUser) {
    toastNotify('You need to login first', 'warn');
    return (
      <Navigate to="/" state={ { from: location } } replace />
    )
  } else { 
    return (<Outlet/>)
  }

}

export default PrivateRouter