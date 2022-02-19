import React from "react"
import styled from "styled-components"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import { GridItem } from "../../components"

const GridView = ({ workers }) => {
  return (
    <Container component="main" maxWidth="xl">
      <Wrapper>
        <Grid container justifyContent="center" spacing={2}>
          {workers.map((worker) => {
            return (
              <Grid item key={worker.id}>
                <GridItem {...worker} />
              </Grid>
            )
          })}
        </Grid>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  padding-top: 2rem;
`

export default GridView
