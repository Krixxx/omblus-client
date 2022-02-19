import React from "react"
import styled from "styled-components"

import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"

import { ListItem } from "../../components"

const ListView = ({ workers }) => {
  return (
    <Container component="main" maxWidth="lg">
      <Wrapper>
        <Stack alignItems="center" spacing={2}>
          <table className="workers">
            <tbody>
              {workers.map((worker) => {
                return <ListItem key={worker.id} {...worker} />
              })}
            </tbody>
          </table>
        </Stack>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  padding-top: 2rem;
  .workers {
    margin-top: 12px;
    width: 80vw;
    max-width: 700px;
  }
`

export default ListView
