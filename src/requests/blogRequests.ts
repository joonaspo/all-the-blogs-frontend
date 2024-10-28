import axios from 'axios';
import { BlogEntryFormValues, BlogPost, CommentObject } from '../types';
const baseUrl = '/api/posts/';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

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
  const { data } = await axiosInstance.get<BlogPost>(`${id}`);
  return data;
};

export const createNewPost = async (newPostObject: BlogEntryFormValues) => {
  console.log(config);
  const { data } = await axiosInstance.post<BlogPost>(
    '',
    newPostObject,
    config,
  );
  return data;
};

export const getBlogs = async (tags: string[]) => {
  const { data } = await axiosInstance.get<BlogPost[]>('', {
    params: { tag: tags },
    paramsSerializer: {
      indexes: null,
    },
  });
  console.log(data);
  return data;
};

export const getComments = async (id: string) => {
  const { data } = await axiosInstance.get<CommentObject[]>(`${id}/comments`);
  console.log(data);
  return data;
};

export const addLike = async (id: string) => {
  const { data } = await axiosInstance.patch<BlogPost>(`${id}`, null, config);
  console.log(data);
  return data;
};
