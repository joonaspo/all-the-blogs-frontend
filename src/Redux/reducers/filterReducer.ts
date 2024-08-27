import { createSlice } from '@reduxjs/toolkit';

import { AppDispatch } from '../store';

const initialState: string[] | null = null;

export const filterReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (_state, action) => {
      return action.payload;
    },
  },
});

export const setFilterArray = (tagsArray: string[]) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setFilter(tagsArray));
  };
};

export const { setFilter } = filterReducer.actions;

export default filterReducer.reducer;
