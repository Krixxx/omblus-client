import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

//MUI
import { Button, Container, Paper, Typography } from "@mui/material"

const Error = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Container component="main">
      <Wrapper>
        <Paper className="paper">
          <div className="item-container">
            <Typography variant="h1">404</Typography>
            <Typography variant="h3">Page Not Found</Typography>
            <Typography variant="h4">Oled ilmselt eksinud</Typography>
            <Typography variant="subtitle1">Mine tagasi esilehele</Typography>
            <Button variant="outlined" fullWidth="false" onClick={handleClick}>
              Esilehele
            </Button>
          </div>
        </Paper>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  .paper {
    width: 500px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
  }
  .item-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export default Error
