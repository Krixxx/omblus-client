import React from "react"
import styled from "styled-components"

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import LogoutButton from "../components/LogoutButton"

const Worker = () => {
  const user = useSelector((state) => state.auth.user)
  const admin = user.role === "admin"

  return (
    <Wrapper>
      {admin && <Navigate to="/dashboard" />}
      <div>Hello from Worker {user.name} page</div>
      <LogoutButton />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Worker
