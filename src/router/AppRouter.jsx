import React from 'react'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout';
import { Login, Purchases, Register, Sales } from '../pages';
import Brands from '../pages/Brands';
import Categories from '../pages/Categories';
import Dashboard from '../pages/Dashboard';
import Firms from '../pages/Firms';
import Products from '../pages/Products';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login/>} />
        <Route path="/register" element={ <Register /> } />
        <Route path="/stock" element={ <PrivateRouter /> }> 
          <Route path="/stock" element={ <Layout /> }>
            <Route path="dashboard" element={ <Dashboard/>} />
            <Route path="firms" element={ <Firms/>} />
            <Route path="categories" element={ <Categories/>} />
            <Route path="brands" element={ <Brands/>} />
            <Route path="products" element={ <Products/>} />
            <Route path="sales" element={ <Sales/>} />
            <Route path="purchases" element={ <Purchases/>} />
          </Route>
        

        </Route>
      </Routes>  
    </Router>
  )
}

export default AppRouter