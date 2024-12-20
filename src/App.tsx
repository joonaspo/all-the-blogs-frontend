import LoginView from './components/Login';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import SignupView from './components/Signup';
import HomeView from './components/Home/HomeView';
import NotificationPopup from './components/Notifications/NotificationPopup';
import CreateNewPostView from './components/Create/CreateNewPostView';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './Redux/store';
import { setToken } from './requests/blogRequests';
import FetchDetailedBlog from './components/Blogs/Main/FetchDetailedBlog';
import Profile from './components/Profile/Profile';

const App = () => {
  const token = useSelector((state: RootState) => state.login?.token) as
    | string
    | null;
  useEffect(() => {
    const saveToken = async () => {
      await setToken(token);
    };
    saveToken();
  }, [token]);

  return (
    <div className='page'>
      <NotificationPopup />
      <Routes>
        <Route path='/' element={<LoginView />}></Route>
        <Route path='/signup' element={<SignupView />}></Route>
        <Route path='/home' element={<HomeView />}></Route>
        <Route path='/create' element={<CreateNewPostView />}></Route>
        <Route path='/home/view/:id' element={<FetchDetailedBlog />}></Route>
        <Route path='/users/viewProfile/:id' element={<Profile />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
};

export default App;
