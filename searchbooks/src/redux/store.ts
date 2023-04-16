import { configureStore, combineReducers } from '@reduxjs/toolkit';
import books from './books/booksSlice';
import { useDispatch } from 'react-redux';
import filter from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    books,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
