import { createSlice } from '@reduxjs/toolkit';
import { AlertSeverity } from '../../types';
import { AppDispatch } from '../store';

interface NotificationState {
  message?: string | null;
  timeShown?: number;
  severity?: AlertSeverity;
}

const initialState: NotificationState = {
  message: null,
  timeShown: undefined,
  severity: undefined,
};

export const notificationReducer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload.message;
      state.timeShown = action.payload.timeShown;
      state.severity = action.payload.severity;
    },
    clearNotification: (state) => {
      state.message = null;
      state.timeShown = undefined;
      state.severity = undefined;
    },
  },
});

export const showTimedError = (message: string, time: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setNotification({ message, time, severity: AlertSeverity.error }));
    setTimeout(() => {
      dispatch(clearNotification());
    }, time * 1000);
  };
};

export const showStaticError = (message: string) => (dispatch: AppDispatch) => {
  console.log(message);
  dispatch(setNotification({ message, timeShown: undefined }));
};

export const showTimedSuccess = (message: string, time: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      setNotification({ message, time, severity: AlertSeverity.success }),
    );
    setTimeout(() => {
      dispatch(clearNotification());
    }, time * 1000);
  };
};

export const showTimedInfo = (message: string, time: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setNotification({ message, time, severity: AlertSeverity.info }));
    setTimeout(() => {
      dispatch(clearNotification());
    }, time * 1000);
  };
};

export const { setNotification, clearNotification } =
  notificationReducer.actions;

export default notificationReducer.reducer;
