import axios from 'axios';
import { createContext, useState } from 'react';
import { toastNotify } from '../helper/Toastify';

const url = 'http://10000.stock.fullstack.clarusway.com/'

export const StockContext = createContext();

const StockContextProvider = (props) => { 
  const [transaction, setTransaction] = useState([]);
  const [totalProfit, setTotalProfit] = useState([]);
  const [firms, setFirms] = useState([]);
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);


  const values = {
    transaction, 
    totalProfit, 
    firms, 
    brands, 
    category
  }

  return (
    <StockContextProvider.Provider value={ values}> 
      { props.children}
    </StockContextProvider.Provider>
  )
}


export default StockContextProvider