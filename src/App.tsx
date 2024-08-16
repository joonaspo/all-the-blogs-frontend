import LoginView from './components/Login';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupView from './components/Signup';
import HomeView from './components/Home/HomeView';
import NotificationPopup from './components/Notifications/NotificationPopup';
function App() {
	return (
		<BrowserRouter>
			<div className='page'>
				<NotificationPopup />
				<Routes>
					<Route path='/' element={<LoginView />}></Route>
					<Route path='/signup' element={<SignupView />}></Route>
					<Route path='/home' element={<HomeView />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
