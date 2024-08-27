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

export const getBlogById = async (id: string) => {
  const { data } = await axios.get<BlogPost>(`${baseUrl}/${id}`);
  return data;
};

export const createNewPost = async (newPostObject: BlogEntryFormValues) => {
  console.log(config);
  const { data } = await axios.post<BlogPost>(baseUrl, newPostObject, config);
  return data;
};

export const getBlogs = async (tags: string[]) => {
  const { data } = await axios.get<BlogPost[]>(baseUrl, {
    params: { tag: tags },
    paramsSerializer: {
      indexes: null,
    },
  });
  console.log(data);
  return data;
};

export const addLike = async (id: string) => {
  const { data } = await axios.patch<BlogPost>(
    `${baseUrl}/${id}`,
    null,
    config,
  );
  console.log(data);
  return data;
};
