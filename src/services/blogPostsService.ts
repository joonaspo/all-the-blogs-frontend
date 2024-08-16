import axios from 'axios';
const baseUrl = '/api/blogs/';

let token: string | null = null;

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const setToken = async (newToken: string | null) => {
  token = newToken;
};

export const createNewPost = async (newPostObject: unknown) => {
  const { data } = await axios.post(baseUrl, newPostObject, config);
  return data;
};
