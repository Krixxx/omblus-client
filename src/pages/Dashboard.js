import React, { useEffect } from "react"
import styled from "styled-components"

import { logOut } from "../app/slices/authSlice"
import {
  selectAllWorkersList,
  fetchWorkersList,
} from "../app/slices/workersSlice"

import { checkInternetConnection } from "../utils/helpers"

import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { LogoutButton, DisplaySelector } from "../components"

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.user)
  const worker = user.role === "worker"

  const workersList = useSelector(selectAllWorkersList)
  const workersLoadingStatus = useSelector((state) => state.workers.status)

  const handleLogout = () => {
    if (checkInternetConnection()) {
      dispatch(logOut())
      navigate("/")
    } else {
      console.log("Could not log out")
    }
  }

  useEffect(() => {
    //load workersList from server to Redux
    if (workersLoadingStatus === "idle") {
      dispatch(fetchWorkersList())
    }
  }, [dispatch, workersLoadingStatus])

  return (
    <Wrapper>
      {worker && <Navigate to="/worker" />}
      <DisplaySelector />
      <div>Hello from Admin {user.name} page</div>
      {workersList.map((worker) => {
        return (
          <div key={worker.id}>
            <p>{worker.username}</p>
            {worker.working ? <p>Töötab</p> : <p>Ei tööta</p>}
          </div>
        )
      })}
      <LogoutButton handleLogout={handleLogout} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
`

export default Dashboard
