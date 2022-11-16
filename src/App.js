import AuthContextProvider from './context/AuthContext';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTransactions, getData } from './store/stock-actions';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTransactions())
    dispatch(getData('category'))
    dispatch(getData('brand'))
  }, []);
  return (
		<AuthContextProvider>
				<AppRouter />
			<ToastContainer />
		</AuthContextProvider>
	);
}

export default App;
