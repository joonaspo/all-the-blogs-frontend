import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { getAllBlogs } from '../../services/blogPostsService';
import axios from 'axios';
import { showTimedError } from './notificationReducer';
import { BlogPost } from '../../types';

const initialState: BlogPost[] = [];

export const blogsReducer = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (_state, action) => {
      return action.payload;
    },
  },
});

export const getBlogs = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const blogs = await getAllBlogs();
      dispatch(setBlogs(blogs));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data && typeof error.response.data === 'string') {
          dispatch(showTimedError(error.response.data, 5000));
        } else {
          dispatch(showTimedError('Unrecognized axios error!', 5000));
        }
      } else {
        dispatch(showTimedError('Unknown error when fetching blogs!', 5000));
      }
    }
  };
};

export const { setBlogs } = blogsReducer.actions;

export default blogsReducer.reducer;
