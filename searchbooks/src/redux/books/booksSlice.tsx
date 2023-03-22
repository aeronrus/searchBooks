import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Book, Books, BooksSliceState } from './types';

const initialState: BooksSliceState = {
  items: [],
  status: 'loading',
};

export const fetchBooks = createAsyncThunk<Books[]>('books/fetchBooks', async () => {
  const { data } = await axios.get(
    'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor',
  );
  return data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Books[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.items = action.payload;
    });
    builder.addCase(fetchBooks.fulfilled, (state) => {
      state.status = 'loaded';
      state.items = [];
    });
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
