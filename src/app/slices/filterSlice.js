import { createSlice } from "@reduxjs/toolkit"
import { getLocalStorage } from "../../utils/helpers"

const initialState = { view: getLocalStorage("view", "grid") }

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setView(state, action) {
      state.view = action.payload

      setLocalStorage(action.payload)
    },
  },
})

const setLocalStorage = (state) => {
  localStorage.setItem("view", JSON.stringify(state))
}

export const { setView } = filterSlice.actions

export default filterSlice.reducer
