import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useSelector } from 'react-redux';
import SideBarItems from './SideBarItems';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })
  (({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative', 
      whiteSpace: 'nowrap', 
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp, 
        duration: theme.transitions.duration.enteringScreen
      }), 
      backgroundColor: 'darkslategrey',
      boxSizing: 'border-box', 
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }), 
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9)
        }
      })
    }
  }))


const Sidebar = () => {

  const open = useSelector(state => state.ui.open);

  return (
    <Drawer variant="permanent"open={open}>
      <Toolbar/>
      <SideBarItems/>
    </Drawer>
  )
}

export default Sidebar