import axios from 'axios'
import { useState, createContext } from 'react'


export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('username') || false);
}

