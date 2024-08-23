import { createSlice } from '@reduxjs/toolkit';
import { logIn } from '../../services/loginService';
import { LoginCredentials, UserLoggedIn } from '../../types';
import { setToken } from '../../services/blogPostsService';
import { AppDispatch } from '../store';
import axios from 'axios';
import { showTimedError } from './notificationReducer';

const initialState: UserLoggedIn | null = (() => {
  const userJSON = localStorage.getItem('BlogAppUser') as string | null;
  if (userJSON) {
    const user: UserLoggedIn = JSON.parse(userJSON);
    return user;
  }
  return null;
})();

export const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCurrentUser: (_state, action) => {
      return action.payload;
    },
  },
});

export const logUserIn = (loginCredentials: LoginCredentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      const user = await logIn(loginCredentials);
      localStorage.setItem('BlogAppUser', JSON.stringify(user));
      await setToken(user.token);
      console.log(user);
      dispatch(setCurrentUser(user));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data && typeof error.response.data === 'string') {
          dispatch(showTimedError(error.response.data, 2500));
        } else {
          dispatch(showTimedError('Unrecognized Axios error!', 2500));
        }
      } else {
        dispatch(showTimedError('Unknown error!', 2500));
      }
    }
  };
};

export const logUserOut = () => {
  return async (dispatch: AppDispatch) => {
    localStorage.removeItem('BlogAppUser');
    await setToken(null);
    dispatch(setCurrentUser(null));
  };
};

export const { setCurrentUser } = loginReducer.actions;

export default loginReducer.reducer;
