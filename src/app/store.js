import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./slices/authSlice"
import workersReducer from "./slices/workersSlice"
import filterReducer from "./slices/filterSlice"

export default configureStore({
  reducer: {
    auth: authReducer,
    workers: workersReducer,
    filter: filterReducer,
  },
})
