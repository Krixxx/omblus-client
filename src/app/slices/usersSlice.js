import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  users: [],
  status: "idle",
  error: null,
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.users = state.users.concat(action.payload)
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload)
      })
  },
})

export const selectAllUsers = (state) => state.users.users

export const fetchAllUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL + `/users`)

  return response.data
})

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + `/users`,
      userData
    )

    return response.data
  }
)

export default usersSlice.reducer
