import { configureStore } from '@reduxjs/toolkit'; // Ensure correct import path for @reduxjs/toolkit
import counterReducer from './CounterSlice'; // Import the default exported reducer from CounterSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Use the reducer from counterSlice
  },
});
