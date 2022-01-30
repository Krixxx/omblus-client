import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: { name: 'marge', role: 'admin' } };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
