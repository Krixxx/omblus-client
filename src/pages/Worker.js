import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { logOut } from "../app/slices/authSlice"

import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { LogoutButton, SendAlertButton, AskWorkButton } from "../components"
import { checkInternetConnection, getLocalStorage } from "../utils/helpers"

//MUI
import Grow from "@mui/material/Grow"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"
import axios from "axios"

const Worker = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.user)
  const admin = user.role === "admin"
  //local states
  const [error, setError] = useState("")
  const [working, setWorking] = useState(getLocalStorage("working", true))
  const [alert, setAlert] = useState(getLocalStorage("alert", false))
  const [logged, setLogged] = useState(getLocalStorage("logged", true))

  const handleClick = () => {
    if (checkInternetConnection()) {
      setError("")
      setWorking(!working)
    } else {
      setError("Internetiühenduse probleemid!")
    }
  }

  const handleAlert = () => {
    if (checkInternetConnection()) {
      setError("")
      setAlert(!alert)
    } else {
      setError("Internetiühenduse probleemid!")
    }
  }

  const handleLogoutFunction = async () => {
    setLogged(false)
    setAlert(false)
    setWorking(false)
    await setUserToDatabase()
  }

  const handleLogout = async () => {
    if (checkInternetConnection()) {
      try {
        setError("")
        await handleLogoutFunction()
        dispatch(logOut())
        navigate("/")
      } catch (error) {
        setError("Ei saanud välja logida")
      }
    } else {
      setError("Internetiühenduse probleemid!")
    }
  }

  const setCurrentUserStatuses = () => {
    localStorage.setItem("working", JSON.stringify(working))
    localStorage.setItem("alert", JSON.stringify(alert))
    localStorage.setItem("logged", JSON.stringify(logged))
  }

  const setUserToDatabase = async () => {
    try {
      setCurrentUserStatuses()

      await axios.put(process.env.REACT_APP_API_URL + `/workers/${user.name}`, {
        alert,
        working,
        loggedIn: logged,
      })
    } catch (error) {
      console.log("error with updating user in database")
    }
  }

  useEffect(() => {
    setUserToDatabase()
    // eslint-disable-next-line
  }, [working, alert, logged])

  return (
    <>
      {admin && <Navigate to="/dashboard" />}
      <Grow in>
        <Container component="main">
          <Wrapper>
            <Paper elevation={3} className="paper">
              <Typography variant="h4" align="center">
                Kasutaja
              </Typography>
              <Typography variant="h4" align="center">
                {user.name}
              </Typography>
              {error && <Alert severity="error">{error}</Alert>}
              <Stack
                spacing={2}
                alignItems="center"
                mt={2}
                direction={{ xs: "column", sm: "row" }}
              >
                <AskWorkButton
                  loading={false}
                  handleClick={() => handleClick()}
                  working={working}
                />
                <SendAlertButton
                  loading={false}
                  handleAlert={() => handleAlert()}
                  alert={alert}
                />
              </Stack>
            </Paper>
          </Wrapper>
        </Container>
      </Grow>
      <LogoutButton handleLogout={handleLogout} />
    </>
  )
}

const Wrapper = styled.main`
  .paper {
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1rem;
    max-width: 400px;
  }
`

export default Worker
