import React, {useState } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu'
import { Typography, MenuItem, Menu, Toolbar, Avatar, IconButton } from '@mui/material';
import { uiActions } from '../../store/ui-slice';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })
  (({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width, margin'], {
      easing: theme.transitions.easing.sharp, 
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLift: drawerWidth, 
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width, margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    })
  }))



const Header = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const { currentUser, logOut } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleMenu = (e) => { 
    setAnchorEl(e.currentTarget)
  }

  const open = useSelector(state=> state.ui.open)
  return (
    <AppBar position="absolute" sx={ { background: "darkslategrey" } } open={ open}>
      <Toolbar sx={ {pr:'24px'} }>
        <IconButton size="large" edge="start" color="inherit" sx={ { mr: 2 } }
          onClick={ ()=>dispatch(uiActions.toggleOpen()) }>
          <MenuIcon/>
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={ {flexGrow:1} }>
          Clarusway Stock App
        </Typography >
        <Typography component="h1" variant="h6" color="inherit" sx={ { cursor: 'pointer' } } noWrap onClick={ handleMenu}>
          { currentUser && <Avatar alt={ currentUser.toUpperCase()}  src="/broken-image.jpg"/> }
      </Typography>
      { currentUser && (
          <Menu anchorEl={ anchorEl } anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
            keepMounted
            transformOrigin={ { vertical: 'top', horizontal: 'right' } }
            open={ Boolean(anchorEl) }
            onClose={ ()=>setAnchorEl(null)}
          >
          <MenuItem onClick={ ()=> logOut(navigate)}>Logout</MenuItem>
        </Menu>
      )}
        </Toolbar>
    </AppBar>
  )
}

export default Header