import { createSlice } from "@reduxjs/toolkit"
import { getLocalStorage } from "../../utils/helpers"

const initialState = { gridview: getLocalStorage("gridview", true) }

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setGridView(state, action) {
      state.gridview = true
      setGridLocalStorage(true)
    },
    setListView(state, action) {
      state.gridview = false
      setGridLocalStorage(false)
    },
  },
})

const setGridLocalStorage = (state) => {
  localStorage.setItem("gridview", JSON.stringify(state))
}

export const { setGridView, setListView } = filterSlice.actions

export default filterSlice.reducer
