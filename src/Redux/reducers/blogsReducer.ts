import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { createNewPost } from '../../requests/blogRequests';
import axios from 'axios';
import { showTimedError, showTimedSuccess } from './notificationReducer';
import { BlogEntryFormValues, BlogPost } from '../../types';

const initialState: BlogPost[] = [];

export const blogsReducer = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (_state, action) => {
      return action.payload;
    },
    appendBlogs: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const createBlog = (blogEntry: BlogEntryFormValues) => {
  return async (dispatch: AppDispatch): Promise<BlogPost | null> => {
    try {
      console.log(blogEntry);
      const newBlog = await createNewPost(blogEntry);
      dispatch(appendBlogs(newBlog));
      dispatch(showTimedSuccess(`New blog ${blogEntry.title} added!`, 4000));
      return newBlog;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data && typeof error.response.data === 'string') {
          dispatch(showTimedError(error.response.data, 5000));
        } else {
          dispatch(showTimedError('Unrecognized axios error!', 5000));
        }
      } else {
        dispatch(showTimedError('Unknown error when creating blog!', 5000));
      }
      return null;
    }
  };
};

export const { setBlogs, appendBlogs } = blogsReducer.actions;

export default blogsReducer.reducer;
