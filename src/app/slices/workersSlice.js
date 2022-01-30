import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const workersSlice = createSlice({
  name: 'workers',
  initialState,
  reducers: {},
});

export default workersSlice.reducer;
