import React from "react"
import styled from "styled-components"

import { useSelector, useDispatch } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { logOut } from "../app/slices/authSlice"

const Worker = () => {
  const user = useSelector((state) => state.auth.user)
  const admin = user.role === "admin"
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logOut())
    navigate("/")
  }
  return (
    <Wrapper>
      {admin && <Navigate to="/dashboard" />}
      <div>Hello from Worker {user.name} page</div>
      <button className="logout-btn" onClick={handleLogout}>
        Logi välja
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .logout-btn {
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 1rem;
    cursor: pointer;
    margin: 1.5rem;
    width: 100px;
    height: 50px;
    color: #fff;
    border: 1px solid transparent;
    background-color: #0d6efd;
    border-color: #0d6efd;
    border-radius: 0.25rem;
  }
`

export default Worker
