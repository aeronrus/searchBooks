import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Books, BooksSliceState, SearchBooksParams } from './types';

const initialState: BooksSliceState = {
  books: [],
  status: 'loading',
};

export const fetchBooks = createAsyncThunk<Books[], SearchBooksParams>(
  'books/fetchBooks',
  async (params) => {
    const { searchValue, startIndex } = params;
    const { data } = await axios.get<Books[]>(
      `https://www.googleapis.com/books/v1/volumes?q=` +
        searchValue +
        `&key=AIzaSyCmncm - PfZWBDFTmOBluAQaWct7Dfl76Io&maxResults=30&startIndex=` +
        startIndex,
    );
    return data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Books[]>) {
      state.books.push(...action.payload);
    },
    setBooksNull(state) {
      state.books = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.books.push(...action.payload);
    });
    builder.addCase(fetchBooks.fulfilled, (state) => {
      state.status = 'error';
    });
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
