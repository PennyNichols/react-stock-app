import React from 'react'
import {Login, Register} from '../pages'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default AppRouter
