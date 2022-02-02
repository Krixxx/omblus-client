import React from "react"
import styled from "styled-components"

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import LogoutButton from "../components/LogoutButton"

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user)
  const worker = user.role === "worker"

  return (
    <Wrapper>
      {worker && <Navigate to="/worker" />}
      <div>Hello from Admin {user.name} page</div>
      <LogoutButton />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Dashboard
