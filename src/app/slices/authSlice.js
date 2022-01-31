import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios"

const username = localStorage.getItem("omblus_username")
const role = localStorage.getItem("omblus_role")

const initialState = {
  user: {
    name: username ? username : "",
    role: role ? role : "",
  },
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      const { username, role } = action.payload
      state.user.name = username
      state.user.role = role

      addUserToLocalStorage(state.user)
    },
    logOut(state, action) {
      removeUserFromLocalStorage()
      state.user.name = ""
      state.user.role = ""
    },
  },
})

const addUserToLocalStorage = ({ name, role }) => {
  localStorage.setItem("omblus_username", name)
  localStorage.setItem("omblus_role", role)
}

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("omblus_username")
  localStorage.removeItem("omblus_role")
}

export const { setUser, logOut } = authSlice.actions

export default authSlice.reducer
