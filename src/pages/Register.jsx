import React, { useContext } from 'react';
import '../styles/login.css';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import Img from '../assets/result.svg';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";


const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const initialValues = {
    username: '', 
    first_name: '', 
    last_name: '', 
    email: '',
    password:''
  }

  const registerSchema = yup.object().shape({
    username: yup.string().required('Username is required'), 
    email: yup.string().email('Email Invalid').required('Email is required'), 
    first_name: yup.string().required('First Name is required'), 
    last_name: yup.string().required('Last Name is required'), 
    password: yup.string()
      .min(8, "Password minimum 8 characters")
      .max(12)
      .matches(/\d+/, 'Password should include at least 1 numbers')
      .matches(/[a-z]+/, 'Password should include at least 1 lowercase character')
      .matches(/[A-Z]+/, 'Password should include at least 1 uppercase character')
      .matches(/[!,?{}><%&$#+-.]+/, 'Password should include at least 1 special character')
      .required('Password field is required')
    
  })

  const submitHandler = (values, actions) => {
    actions.resetForm();
    actions.setSubmitting(false);
    createUser({...values, password2: values.password}, navigate)
  }

  return (

    <div className="body">
      <div className="left-login">
        <img src={ Img } alt="chart" className='chart' />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>REGISTER</h1>
          <Formik
            initialValues={ initialValues }
            onSubmit={ submitHandler }
            validationSchema={ registerSchema }>

            { () => (
              
              <Form className='login-form'>
                <div className='form-group'>
                  <label form="email">Username</label>
                  <Field name="username" type="text" className="form-field" placeholder="Username" />
                  <ErrorMessage component="span" className='form-error' name="username" />
                </div>
                <div className='form-group'>
                  <label form="first_name">First Name</label>
                  <Field name="first_name" type="text" className="form-field" placeholder="First Name" />
                  <ErrorMessage component="span" className='form-error' name="first_name" />
                </div>
                <div className='form-group'>
                  <label form="last_name">Last Name</label>
                  <Field name="last_name" type="text" className="form-field" placeholder="Last Name" />
                  <ErrorMessage component="span" className='form-error' name="last_name" />
                </div>

                <div className='form-group'>
                  <label form="email">Email</label>
                  <Field name="email" type="email" className="form-field" placeholder="Email" />
                  <ErrorMessage component="span" className='form-error' name="email" />
                </div>
                <div className='form-group'>
                  <label form="password">Password</label>
                  <Field name="password" type="password" className="form-field" placeholder="Password" />
                  <ErrorMessage component="span" className='form-error' name="password" />
                </div>

                <button className="button" type='submit'> Register</button>
              </Form>
            )}
          </Formik>
          <div className="user-link-cad" onClick={ () => navigate('/') }>
            Do you have an account ? 
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register