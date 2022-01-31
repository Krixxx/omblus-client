import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { setUser } from "../app/slices/authSlice"

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
    }

    setLoading(false)
  }

  return (
    <Wrapper>
      <div className="card">
        <h2>Logi sisse</h2>
        {error && <p className="error">{error}</p>}
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Kasutaja</label>
          <input
            type="text"
            name="username"
            required
            value={values.username}
            onChange={handleChange}
            id="username"
          />
          <label htmlFor="password">Parool</label>
          <input
            type="password"
            name="password"
            required
            value={values.password}
            onChange={handleChange}
            id="password"
          />
          <button disabled={loading} type="submit">
            Logi Sisse
          </button>
        </form>
      </div>
      <p className="version">V1.3</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .card {
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ced4da;
    border-radius: 0.5rem;
    max-width: 400px;
    background: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
  input {
    line-height: 1.5;
    border: 1px solid #ced4da;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.5rem;
    padding: 0.375rem 0.75rem;
  }
  button {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .version {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0.5rem;
  }
  .signup-form {
    display: grid;
  }
  .have-account {
    text-align: center;
  }
  .error {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
    position: relative;
    padding: 1rem 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .demo-info {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 0%.5;
    & p {
      margin: 0;
    }
  }
`

export default Home
