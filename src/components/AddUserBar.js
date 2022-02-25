import React, { useState } from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"

import { useDispatch } from "react-redux"

import { createUser } from "../app/slices/usersSlice"

const initialState = {
  username: "",
  password: "",
  role: "",
}

const AddUserBar = () => {
  const [values, setValues] = useState(initialState)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUser(values))
    console.log(values)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          padding={2}
          marginTop={2}
          marginBottom={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <TextField
              label="Kasutaja ID"
              type="text"
              name="username"
              required
              value={values.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Parool"
              type="password"
              name="password"
              required
              value={values.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <FormControl style={{ minWidth: 120 }}>
              <InputLabel id="roll-label">Roll</InputLabel>
              <Select
                labelId="roll-label"
                name="role"
                value={values.role}
                label="Roll"
                required
                onChange={handleChange}
              >
                <MenuItem value="admin">Meister</MenuItem>
                <MenuItem value="worker">Õmbleja</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Loo kasutaja
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default AddUserBar
