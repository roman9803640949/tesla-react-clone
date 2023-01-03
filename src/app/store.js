import { configureStore } from '@reduxjs/toolkit';
import parReducers from '../features/car/carSlice'
export const store = configureStore({
  reducer: {
    car:parReducers
  },
});
