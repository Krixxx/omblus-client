import React, { useRef, useState } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import axios from "axios"

const Home = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const login = async (username, password) => {
    const response = await axios
      .get(process.env.REACT_APP_API_URL + `/users/${username}`)
      .catch((e) => setError("Sellist kasutajat pole"))

    if (response) {
      if (response.data.password === password) {
        //TODO - if password is OK, then check for role and Navigate to proper page
        //Also, set logged in user to Redux.
      } else {
        setError("Parool on vale")
      }
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    await login(values.username, values.password)
    setLoading(false)
    // try {
    //   //do some magic code
    // } catch (error) {
    //   setError("Ei saanud sisse logida")
    //   setLoading(false)
    // }
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
            onChange={handleChange}
            id="username"
          />
          <label htmlFor="password">Parool</label>
          <input
            type="password"
            name="password"
            required
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
