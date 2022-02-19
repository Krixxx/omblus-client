import React from "react"
import styled from "styled-components"

import { logOut } from "../app/slices/authSlice"

import { checkInternetConnection } from "../utils/helpers"

import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { LogoutButton, DisplaySelector, WorkersList } from "../components"

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.user)
  const worker = user.role === "worker"

  const handleLogout = () => {
    if (checkInternetConnection()) {
      dispatch(logOut())
      navigate("/")
    } else {
      console.log("Could not log out")
    }
  }

  return (
    <Wrapper>
      {worker && <Navigate to="/worker" />}
      <DisplaySelector />
      <WorkersList />
      <LogoutButton handleLogout={handleLogout} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
`

export default Dashboard
