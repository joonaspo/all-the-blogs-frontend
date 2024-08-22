import LoginView from './components/Login';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import SignupView from './components/Signup';
import HomeView from './components/Home/HomeView';
import NotificationPopup from './components/Notifications/NotificationPopup';
import CreateNewPostView from './components/Create/CreateNewPostView';
import { AppDispatch } from './Redux/store';
import { useEffect } from 'react';
import { checkForLogin } from './Redux/reducers/loginReducer';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import ViewDetailedBlog from './components/Blogs/ViewDetailedBlog';

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const checkForExistingUser = async () => {
      await dispatch(checkForLogin());
    };
    checkForExistingUser();
  }, [dispatch]);

  return (
    <div className='page'>
      <NotificationPopup />
      <Routes>
        <Route path='/' element={<LoginView />}></Route>
        <Route path='/signup' element={<SignupView />}></Route>
        <Route path='/home' element={<HomeView />}></Route>
        <Route path='/create' element={<CreateNewPostView />}></Route>
        <Route path='/home/view/:id' element={<ViewDetailedBlog />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
};

export default App;
