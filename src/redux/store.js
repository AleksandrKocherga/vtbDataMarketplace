import { configureStore } from '@reduxjs/toolkit';
import datasetsReducer from './datasetsReducer';
import userReducer from './userReducer';

export const store = configureStore({
  reducer: {
    datasets: datasetsReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
