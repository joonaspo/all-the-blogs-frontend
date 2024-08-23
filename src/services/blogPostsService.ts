import axios from 'axios';
import { BlogEntryFormValues, BlogPost } from '../types';
const baseUrl = '/api/posts/';

const token: string | null = null;

let config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const setToken = async (newToken: string | null) => {
  config = {
    headers: { Authorization: `Bearer ${newToken}` },
  };
};

export const getAllBlogs = async () => {
  const { data } = await axios.get<BlogPost[]>(`${baseUrl}/all`);
  return data;
};

export const getBlogById = async (id: string) => {
  const { data } = await axios.get<BlogPost>(`${baseUrl}/${id}`);
  return data;
};

export const createNewPost = async (newPostObject: BlogEntryFormValues) => {
  console.log(config);
  const { data } = await axios.post<BlogPost>(baseUrl, newPostObject, config);
  return data;
};
