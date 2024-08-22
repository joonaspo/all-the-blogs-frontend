import axios from 'axios';
import { BlogPost } from '../types';
const baseUrl = '/api/posts/';

let token: string | null = null;

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const setToken = async (newToken: string | null) => {
  token = newToken;
};

export const getAllBlogs = async () => {
  const { data } = await axios.get<BlogPost[]>(`${baseUrl}/all`);
  return data;
};

export const getBlogById = async (id: string) => {
  const { data } = await axios.get<BlogPost>(`${baseUrl}/${id}`);
  return data;
};

export const createNewPost = async (newPostObject: unknown) => {
  const { data } = await axios.post(baseUrl, newPostObject, config);
  return data;
};
