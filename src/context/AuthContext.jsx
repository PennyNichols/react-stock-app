import axios from 'axios'
import { useState, createContext } from 'react'
import {toastNotify} from '../helper/Toastify' 

export const AuthContext = createContext();

const url = `http://13164.stock.fullstack.clarusway.com/`

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('username') || false);
    let keys = sessionStorage.getItem('token')
    const [myKey, setMyKey] = useState(keys && window.atob(keys));
  
  
    const createUser = async (userInfo, navigate) => { 
      try {
        const res = await axios.post(`${url}account/register/`, userInfo);
        if (res.data.token) { 
          console.log(res);
          setMyKey(res.data.token);
          setCurrentUser(res.data.username);
          sessionStorage.setItem('username', res.data.username);
          const myToken = window.btoa(res.data.token);
          sessionStorage.setItem('token', myToken);
          toastNotify('User registered successfully', 'success');
          navigate('/stock/dashboard');
        }
      } catch (err) { 
        console.log(err);
        toastNotify(err.message, 'error');
      }
    }
  
    const signIn = async (userInfo, navigate) => { 
      
      try {
        const res = await axios.post(`${url}account/auth/login/`, JSON.stringify(userInfo), {
          headers: {'Content-Type': 'application/json'}
        })
        console.log(res);
        if (res.data.key) { 
          setMyKey(res.data.key);
          setCurrentUser(res.data.user.username);
          sessionStorage.setItem("admin", res.data.user.is_superuser);
          sessionStorage.setItem("username", res.data.user.username);
          const myToken = window.btoa(res.data.key);
          sessionStorage.setItem('token', myToken);
          toastNotify('User LoggedIn successfully', 'success');
          navigate('/stock/dashboard');
        }
  
      } catch (err) { 
        console.log(err);
        toastNotify(err.message, 'error');
      }
    }
  
  
    const logOut = async (navigate) => {
  
      try {
        const options = {
          method: 'post',
          url: `${url}/account/auth/logout/`,
          headers: { 'Authorization': `Token ${myKey}` }
        }
  
        const res = await axios(options);
        if (res.status === 200) {
          setCurrentUser(false);
          setMyKey(false);
          sessionStorage.clear();
          toastNotify('User successfully Logged out !', 'success');
          navigate('/')
        }
  
      } catch (err) {
        console.log(err);
        toastNotify(err.message, 'error');
      }
    }
  
    let value = {
      createUser, 
      currentUser, 
      myKey, 
      signIn, 
      logOut
    }
  
  
    return (
      <AuthContext.Provider value={ value}>
        { props.children}
      </AuthContext.Provider>
    )
  }
  
  export default AuthContextProvider;