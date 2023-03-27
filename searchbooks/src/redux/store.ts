import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
