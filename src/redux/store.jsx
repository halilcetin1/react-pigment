import { configureStore } from '@reduxjs/toolkit'
import navOpenslice from './slices/navOpenslice';

export const store = configureStore({
  reducer: {
   drawer:navOpenslice
  }
  ,
});