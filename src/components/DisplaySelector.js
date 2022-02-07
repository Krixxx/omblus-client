import React from "react"
import styled from "styled-components"

import { setListView, setGridView } from "../app/slices/filterSlice"
import { useDispatch, useSelector } from "react-redux"

import GridViewIcon from "@mui/icons-material/GridView"
import ViewListIcon from "@mui/icons-material/ViewList"
import { Container, Grow } from "@mui/material"

const DisplaySelector = () => {
  const workersList = useSelector((state) => state.workers.workers)
  const gridView = useSelector((state) => state.filter.gridview)
  const dispatch = useDispatch()

  const activeUsers = workersList.reduce((activeUsers, { loggedIn }) => {
    activeUsers[loggedIn] = (activeUsers[loggedIn] || 0) + 1
    return activeUsers
  }, {})

  return (
    <Grow in>
      <Container component="main">
        <Wrapper>
          <p>{`${
            workersList.length === 1
              ? `${workersList.length} kasutaja`
              : `${workersList.length} kasutajat`
          } / ${activeUsers.true || 0} aktiivset`}</p>
          <hr />
          <div className="btn-container">
            <button
              type="button"
              className={`${gridView ? "active" : null}`}
              onClick={() => dispatch(setGridView())}
            >
              <GridViewIcon />
            </button>
            <button
              type="button"
              className={`${!gridView ? "active" : null}`}
              onClick={() => dispatch(setListView())}
            >
              <ViewListIcon />
            </button>
          </div>
        </Wrapper>
      </Container>
    </Grow>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  margin: 0 auto;
  width: auto;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }

  p {
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }
`

export default DisplaySelector
