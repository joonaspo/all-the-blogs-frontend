import axios from 'axios';
import { UserObject } from '../types';

const baseUrl = '/api/users/';

export const getUserById = async (id: string) => {
  const { data } = await axios.get<UserObject>(`${baseUrl}${id}`);
  return data;
};
