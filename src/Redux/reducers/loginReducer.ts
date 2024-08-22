import { createSlice } from '@reduxjs/toolkit';
import { logIn } from '../../services/loginService';
import { LoginCredentials, UserLoggedIn } from '../../types';
import { setToken } from '../../services/blogPostsService';
import { AppDispatch } from '../store';
import axios from 'axios';
import { showTimedError } from './notificationReducer';

interface LoginState {
  token: string | null;
  displayName: string | null;
  username: string | null;
}

const initialState: LoginState = {
  token: null,
  displayName: null,
  username: null,
};

export const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.token = action.payload.token;
      state.displayName = action.payload.displayName;
      state.username = action.payload.username;
    },
  },
});

export const logUserIn = (loginCredentials: LoginCredentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      const user = await logIn(loginCredentials);
      localStorage.setItem('BlogAppUser', JSON.stringify(user));
      await setToken(user.token);
      dispatch(
        setCurrentUser({
          token: user.token,
          displayName: user.displayName,
          user: user.username,
        }),
      );
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
    dispatch(
      setCurrentUser({ token: null, displayName: null, username: null }),
    );
  };
};

export const checkForLogin = () => {
  return async (dispatch: AppDispatch) => {
    const userJSON = localStorage.getItem('BlogAppUser');
    if (userJSON) {
      const user: UserLoggedIn = JSON.parse(userJSON);
      await setToken(user.token);
      dispatch(setCurrentUser(user));
    } else {
      dispatch(
        setCurrentUser({ token: null, displayName: null, username: null }),
      );
    }
  };
};

export const { setCurrentUser } = loginReducer.actions;

export default loginReducer.reducer;
