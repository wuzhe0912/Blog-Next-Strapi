import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todo';

const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export default store;
