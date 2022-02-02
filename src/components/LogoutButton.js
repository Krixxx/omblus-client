import React from "react"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut } from "../app/slices/authSlice"

import Button from "@mui/material/Button"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(logOut())
    navigate("/")
  }

  return (
    <Button
      style={{ position: "fixed", bottom: "0", right: "0", margin: "1.5rem" }}
      variant="contained"
      onClick={handleClick}
    >
      Logi välja
    </Button>
  )
}

export default LogoutButton
