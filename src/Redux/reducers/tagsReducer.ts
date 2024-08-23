import { createSlice } from '@reduxjs/toolkit';
import { Tag } from '../../types';
import { AppDispatch } from '../store';
import { getAllTags } from '../../services/tagsService';
import axios from 'axios';
import { showTimedError } from './notificationReducer';

const initialState: Tag[] | null = null;

export const tagsReducer = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    setTags: (_state, action) => {
      return action.payload;
    },
  },
});

export const getTags = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const tags = await getAllTags();
      dispatch(setTags(tags));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data && typeof error.response.data === 'string') {
          dispatch(showTimedError(error.response.data, 5000));
        } else {
          dispatch(showTimedError('Unrecognized axios error!', 5000));
        }
      } else {
        dispatch(showTimedError('Unknown error when fetching tags!', 5000));
      }
    }
  };
};

export const { setTags } = tagsReducer.actions;

export default tagsReducer.reducer;
