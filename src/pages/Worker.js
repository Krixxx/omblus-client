import React, { useState } from "react"
import styled from "styled-components"

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { LogoutButton, SendAlertButton, AskWorkButton } from "../components"
import { getLocalStorage } from "../utils/helpers"

//MUI
import Grow from "@mui/material/Grow"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"

const Worker = () => {
  const user = useSelector((state) => state.auth.user)
  const admin = user.role === "admin"
  //local states
  const [error, setError] = useState("")
  const [isWorking, setIsWorking] = useState(getLocalStorage("working", true))
  const [isAlert, setIsAlert] = useState(getLocalStorage("alert", true))
  const [isLoggedIn, setIsLoggedIn] = useState(getLocalStorage("logged", true))

  const handleClick = () => {
    console.log("CLICK")
  }
  const handleAlert = () => {
    console.log("ALERT")
  }

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
                direction="row"
                spacing={2}
                alignItems="center"
                mt={2}
                direction={{ xs: "column", sm: "row" }}
              >
                <AskWorkButton
                  loading={false}
                  handleClick={handleClick}
                  working={isWorking}
                />
                <SendAlertButton
                  loading={false}
                  handleAlert={handleAlert}
                  alert={isAlert}
                />
              </Stack>
            </Paper>
          </Wrapper>
        </Container>
      </Grow>
      <LogoutButton />
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
