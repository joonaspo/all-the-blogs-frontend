import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginReducer';
import notificationReducer from './reducers/notificationReducer';
import blogsReducer from './reducers/blogsReducer';

import filterReducer from './reducers/filterReducer';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    notification: notificationReducer,
    blogs: blogsReducer,
    filter: filterReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
