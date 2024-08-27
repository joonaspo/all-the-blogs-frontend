import axios from 'axios';
import { LoginCredentials, UserLoggedIn } from '../types';

export const logIn = async (loginCredentials: LoginCredentials) => {
  const { data } = await axios.post<UserLoggedIn>(
    '/api/login',
    loginCredentials
  );
  return data;
};
