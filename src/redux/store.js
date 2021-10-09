import { configureStore } from '@reduxjs/toolkit';
import datasetsReducer from './datasetsReducer';

export const store = configureStore({
  reducer: {
    datasets: datasetsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
