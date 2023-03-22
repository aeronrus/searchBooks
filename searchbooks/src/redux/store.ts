import { configureStore, combineReducers } from '@reduxjs/toolkit';
import books from './books/booksSlice';

export const store = configureStore({
  reducer: {
    books: books,
  },
});

export default store;
