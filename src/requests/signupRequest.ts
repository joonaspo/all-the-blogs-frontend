import axios from 'axios';
import { ToNewUserEntry, User } from '../types';

export const createNewUser = async (
  newUser: ToNewUserEntry,
): Promise<User | null> => {
  const { data } = await axios.post<User>('/api/users/signup', newUser);
  return data;
};
