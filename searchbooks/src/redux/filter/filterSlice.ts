import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { filterSliceState } from './types';
import { RootState } from '../store';

const initialState: filterSliceState = {
  categoryId: 0,
  sortId: 0,
  startIndex: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortId(state, action: PayloadAction<number>) {
      state.sortId = action.payload;
    },
    setStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = state.startIndex + action.payload;
    },
    setStartIndexNull(state, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
  },
});
export const { setCategoryId, setSortId, setStartIndex, setStartIndexNull } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter;
export default filterSlice.reducer;
