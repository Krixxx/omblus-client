import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  workers: [],
  status: "idle",
  error: null,
}

const workersSlice = createSlice({
  name: "workers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWorkersList.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchWorkersList.fulfilled, (state, action) => {
        state.status = "succeeded"
        //Add fetched information to the workers array
        state.workers = state.workers.concat(action.payload)
      })
      .addCase(fetchWorkersList.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const selectAllWorkersList = (state) => state.workers.workers

export const fetchWorkersList = createAsyncThunk(
  "workers/fetchWorkers",
  async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL + `/workers`)

    return response.data
  }
)

export default workersSlice.reducer
