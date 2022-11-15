import React from 'react';
import { List, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import StarsIcon from '@mui/icons-material/Stars';

const menu = [
  {title: 'Dashboard', icon: <DashboardIcon/>, path:'/stock/dashboard'}, 
  {title: 'Products', icon: <InventoryIcon/>, path:'/stock/products'}, 
  { title: 'Transactions', icon: <AttachMoneyIcon/>, path:'/stock/transactions'}, 
  { title: 'Firms', icon: <StoreIcon />, path:'/stock/firms'}, 
  { title: 'Brands', icon: <StarsIcon/>, path:'/stock/brands'}, 
  { title: 'Categories', icon: <StarsIcon/>, path:'/stock/categories'}, 
]

const SideMenu = () => {
  const admin = sessionStorage.getItem("admin") === 'true';
  const navigate = useNavigate();
  return (

    <List component="nav" sx={ {backgroundColor:'darkslategray', color: 'white', height:'100%'} }>
      { admin &&
        <ListItemButton to="https://anthonycw6.pythonanywhere.com/admin/" target="true">
        <ListItemIcon>
            <DashboardIcon />  
        
          </ListItemIcon>
          <ListItemText primary="Admin Panel" />
        </ListItemButton> }

      { menu.map((menuItem, index)=>(
      <ListItemButton key={ index.toString() } onClick={ ()=> navigate(menuItem.path)}>
        <ListItemIcon>
          { menuItem.icon}
        </ListItemIcon>
        <ListItemText primary={ menuItem.title} />
      </ListItemButton>
      ))}
    </List>

  )
}

export default SideMenu