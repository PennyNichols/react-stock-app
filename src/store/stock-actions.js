
import axios from 'axios';
import { stockActions } from './stock-slice';
import { toastNotify } from '../helper/Toastify';

const url = "http://13164.fullstack.clarusway.com/"


export const getData = (type) => { 
    return async(dispatch) => { 
      const token = atob(sessionStorage.getItem('token'));
      try {
        const res = await axios(`${url}stock/${type}/`, {
          headers: {Authorization: `Token ${token}`}
        })
        console.log(res);
  
        if (res.status === 200) { 
          switch (type) { 
            case 'firm': dispatch(stockActions.getFirms(res.data)); break;
            case 'product': dispatch(stockActions.getProducts(res.data)); break;
            case 'brand': dispatch(stockActions.getBrands(res.data)); break;
            case 'category': dispatch(stockActions.getCategory(res.data)); break;
            default: return null; 
          }
  
        }
      } catch (err) { 
        console.log(err)
      }
    }
  
  }
  
  export const getAllTransactions = () => { 
    return async(dispatch) => {
      const token = atob(sessionStorage.getItem("token"));
      try {
          const res = await axios.get(`${url}stock/purchases/`, {
                      headers: { Authorization: `Token ${token}` },
          });
       const resSale = await axios.get(`${url}stock/sales/`, {
                  headers: { Authorization: `Token ${token}` },
              });
   
      
        if (res.data && resSale.data) { 
          dispatch(stockActions.getAllTransactions({sales: resSale.data, purchases: res.data}))
        }
      } catch (err) { 
        console.log(err)
      }
  
  
    }
  }
  
  
  export const setData = (method, type, info, navigate, path ) => { 
    return async (dispatch) => { 
      type = type.toLowerCase();
      method = method.toLowerCase();
      const token = atob(sessionStorage.getItem("token"));
      let action; 
  
      const config = {
        method: method, 
        headers: {
          Authorization: `Token ${token}`, 
          'Content-Type': 'application/json'
        }
      }
  
      switch (method) { 
        case 'put':
          config.url = `${url}/stock/${type}/${info.id}/`;
          config.data = info;
          action = 'Updated';
          break;
        case 'post':
          config.url = `${url}/stock/${type}/`;
          config.data = info;
          action = 'Added';
          break;
        case 'delete': 
          config.url = `${url}/stock/${type}/${info}`;
          action = 'Deleted';
          break;
        default: return null
      }
  
      try {
        const res = await axios(config);
        if (res.status === 201 || 204) { 
          toastNotify(`${type[0].toUpperCase() + type.slice(1)} successfully ${action}!`, 'success');
          dispatch(getData(type))
          navigate(path);
        }
  
      } catch (err) {
        console.log(err);
        toastNotify('Please check your authorization', 'error')
      }
  
    }
  }