import axios from 'axios'
import { useState, createContext } from 'react'
import { Navigate } from 'react-router-dom';
import {toastNotify} from '../helper/Toastify' 

export const AuthContext = createContext();

const url = `http://13164.stock.fullstack.clarusway.com/`

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('username') || false);
    let keys = sessionStorage.getItem('token')
    const [myKey, setMyKey] = useState(keys&&window.atob(keys));

    const createUser = async(userInfo) =>{
        try{
            const res = await axios.post(`${url}account/register`, userInfo);
            if(res.data.token){
                setMyKey(res.data.token);
                setCurrentUser(res.data.username);
                sessionStorage.setItem('username', res.data.username);
                const myToken = window.btoa(res.data.token);
                sessionStorage.setItem('token', myToken)
                toastNotify('User registered successfully', 'success')
                navigate('/stock/dashboard')
            }
        }catch (err) {
            toastNotify(err.message, 'error');
        }
    }

    const signIn = async (userInfo, navigate) => {
        try{
            const res = await axios.post(`${url}account/auth/login/`, userInfo)
            if (res.data.key) {
                setMyKey(res.data.key);
                setCurrentUser(res.data.user.username);
                sessionStorage.setItem('admin', res.data.user.is_superuser);
                sessionStorage.setItem('username', res.data.user.username);
                const myToken = window.btoa(res.data.key);
                sessionStorage.setItem('token', myToken)
            }
        }catch(err) {
            toastNotify(err.message, 'error');
        }
    }

    let value = {
        createUser,
        currentUser,
        myKey,
        signIn
    }

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider