import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginReducer';
import notificationReducer from './reducers/notificationReducer';
import blogsReducer from './reducers/blogsReducer';
import detailedBlogReducer from './reducers/detailedBlogReducer';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    notification: notificationReducer,
    blogs: blogsReducer,
    detailedBlog: detailedBlogReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
