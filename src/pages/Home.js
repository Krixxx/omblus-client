import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { setUser } from "../app/slices/authSlice"

//MUI
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Alert from "@mui/material/Alert"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Grow from "@mui/material/Grow"

const initialState = {
  username: "",
  password: "",
}

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)

  const [values, setValues] = useState(initialState)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const isDisabled = loading || !values.username || !values.password

  const login = async (username, password) => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + `/users/${username}`
    )

    if (response) {
      //very simple password check
      if (response.data.password === password) {
        const { username, role } = response.data
        //set user data to redux state
        dispatch(setUser({ username, role }))
      } else {
        setError("Parool on vale")
      }
    }
  }

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/dashboard")
      } else if (user.role === "worker") {
        navigate("/worker")
      }
      //cleanup function
      return () => {}
    }
  }, [user, navigate])

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await login(values.username, values.password)
      setValues({ username: "", password: "" })
      setLoading(false)
    } catch (error) {
      setError("Sellist kasutajat pole")
      setLoading(false)
    }

    setLoading(false)
  }

  return (
    <Grow in>
      <Container component="main">
        <Wrapper>
          <Paper className="paper" elevation={3}>
            <Typography variant="h4" className="title" align="center">
              Logi Sisse
            </Typography>
            {error && (
              <Grow
                in={error}
                style={{ transformOrigin: "0 50 0" }}
                {...(error ? { timeout: 1000 } : {})}
              >
                <Alert className="alert" severity="error">
                  {error}
                </Alert>
              </Grow>
            )}
            <form onSubmit={handleSubmit} className="login-form">
              <TextField
                id="username"
                name="username"
                type="text"
                label="Kasutaja"
                variant="outlined"
                required
                value={values.username}
                onChange={handleChange}
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Parool"
                variant="outlined"
                required
                value={values.password}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                disabled={isDisabled}
                type="submit"
                onClick={handleSubmit}
              >
                Logi Sisse
              </Button>
            </form>
          </Paper>
          <Typography className="version">V2.0</Typography>
        </Wrapper>
      </Container>
    </Grow>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  .title {
    margin-bottom: 1.5rem;
  }
  .paper {
    padding: 1rem;
    max-width: 400px;
    text-align: center;
    margin: 0 auto;
  }
  .alert {
    margin: 1rem auto;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .version {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0.5rem;
  }
`
export default Home
