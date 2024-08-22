import { createSlice } from '@reduxjs/toolkit';
import { BlogPost } from '../../types';
import { AppDispatch } from '../store';
import { getBlogById } from '../../services/blogPostsService';
import { showTimedError } from './notificationReducer';
import axios from 'axios';

const initialState: BlogPost | null = null;

export const detailedBlogReducer = createSlice({
  name: 'detailedBlog',
  initialState,
  reducers: {
    setBlog: (_state, action) => {
      return action.payload;
    },
  },
});

export const getBlog = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const blog = await getBlogById(id);
      dispatch(setBlog(blog));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data && typeof error.response.data === 'string') {
          dispatch(showTimedError(error.response.data, 5000));
        } else {
          dispatch(showTimedError('Unrecognized axios error!', 5000));
        }
      } else {
        dispatch(showTimedError('Unknown error when fetching a blog!', 5000));
      }
    }
  };
};

export const { setBlog } = detailedBlogReducer.actions;

export default detailedBlogReducer.reducer;
