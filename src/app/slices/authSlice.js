import { createSlice } from "@reduxjs/toolkit"

import { getLocalStorage } from "../../utils/helpers"

const initialState = {
  user: {
    name: getLocalStorage("omblus_username", ""),
    role: getLocalStorage("omblus_role", ""),
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
  localStorage.setItem("omblus_username", JSON.stringify(name))
  localStorage.setItem("omblus_role", JSON.stringify(role))
}

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("omblus_username")
  localStorage.removeItem("omblus_role")
  localStorage.removeItem("working")
  localStorage.removeItem("alert")
  localStorage.removeItem("logged")
}

export const { setUser, logOut } = authSlice.actions

export default authSlice.reducer
