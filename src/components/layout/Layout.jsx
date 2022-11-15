import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Box sx={ { display: 'flex' } }>
      <Header />
      <Sidebar />
      <Box component="main" sx={ {
        backgroundColor: '#B7BF99',
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
      } }>

        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout