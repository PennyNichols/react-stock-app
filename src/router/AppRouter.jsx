import React from 'react'
import { Brands, Categories, Dashboard, Firms, Login, Products, Register, Transactions }
  from '../pages';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout';
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
            <Route path="transactions" element={ <Transactions/>} />
          </Route>
        

        </Route>
      </Routes>  
    </Router>
  )
}

export default AppRouter