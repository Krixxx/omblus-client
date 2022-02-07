import { createSlice } from "@reduxjs/toolkit"

const initialState = { gridview: true }

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setGridView(state, action) {
      state.gridview = true
      console.log(state.gridview)
      setGridLocalStorage(action.payload)
    },
    setListView(state, action) {
      state.gridview = false
      console.log(state.gridview)
      setGridLocalStorage(action.payload)
    },
  },
})

const setGridLocalStorage = (state) => {
  localStorage.setItem("gridview", state)
}

export const { setGridView, setListView } = filterSlice.actions

export default filterSlice.reducer
