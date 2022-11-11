import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<AuthContextProvider>
			<AppRouter />
      <ToastContainer/>
		</AuthContextProvider>
	);
}

export default App;
