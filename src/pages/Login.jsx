import React, { useContext } from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import Img from '../assets/result.svg'
import {AuthContext} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>Login</div>
  )
}

export default Login