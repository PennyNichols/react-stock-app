import React, { useContext } from 'react';
import '../styles/login.css';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import Img from '../assets/result.svg';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup.string().email('Email Invalid').required('Email is required'), 
    password: yup.string().min(8, 'Must be minimum 8 characters').required('Password is required')
  })

  const submitHandler = (values, actions) => {
    actions.resetForm();
    actions.setSubmitting(false);

    signIn(values, navigate);
  }

  return (
    <div className="main">
      <h1 style={ { textAlign: 'center', color: 'white', display: 'block' } }>Stock App </h1>
      <div className="body">
        <div className="left-login">
          <img src={ Img } alt="chart" className='chart' />
        </div>

        <div className="right-login">
          <div className="card-login">
            <h1>Login</h1>
            <Formik
              initialValues={ { email: "", password: "" } }
              onSubmit={ submitHandler }
              validationSchema={ loginSchema}
            >

              { () => (
                <Form className='login-form'>
                  <div className='form-group'>
                    <label form="email">Email</label>
                    <Field name="email" type="email" className="form-field" placeholder="Email" />
                    <ErrorMessage component="span" className='form-error' name="email"/>
                  </div>
                  <div className='form-group'>
                    <label form="password">Password</label>
                    <Field name="password" type="password" className="form-field" placeholder="Password" />
                    <ErrorMessage component="span" className='form-error' name="password"/>
                  </div>

                  <button className='button' type='submit'>Login</button>
                  
               </Form>
                
              )}
            </Formik>
            <div className="user-link-cad" onClick={ () => navigate('/register') }>
              Don't have an account ?</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login