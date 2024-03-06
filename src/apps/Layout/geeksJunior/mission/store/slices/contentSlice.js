import { createSlice } from '@reduxjs/toolkit';
import data from '../data';

const initialState = {
  education: '',
  future: '',
  openness: '',
  help: '',
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContent: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setContent } = contentSlice.actions;
export default contentSlice.reducer;
