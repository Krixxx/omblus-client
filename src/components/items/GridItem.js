import React from "react"
import styled from "styled-components"

import Cross from "@mui/icons-material/Clear"
import Info from "@mui/icons-material/Info"
import Check from "@mui/icons-material/Check"
import NoUser from "@mui/icons-material/PersonRemove"

const GridItem = ({ working, username, alert, loggedIn }) => {
  return (
    <Wrapper>
      <div
        className={`container ${
          loggedIn ? (alert ? "orange" : working ? "green" : "red") : "gray"
        }`}
      >
        {loggedIn ? (
          alert ? (
            <Info className="icon" />
          ) : working ? (
            <Check className="icon" />
          ) : (
            <Cross className="icon" />
          )
        ) : (
          <NoUser className="icon" />
        )}
        <div className="info">
          <h2>{username}</h2>
          <p>
            {loggedIn
              ? alert
                ? "probleem"
                : working
                ? "töötan"
                : "ootan tööd"
              : "välja logitud"}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  min-width: 350px;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
  }
  .icon {
    margin: 1rem;
    color: white;
    width: 2.5rem;
    height: 2.5rem;
  }
  h2 {
    color: white;
    font-weight: 400;
    margin: 0.75rem;
    text-align: end;
  }
  p {
    text-transform: capitalize;
    color: white;
    margin-bottom: 0.25rem;
    font-size: 1.25rem;
    padding: 0 1rem;
  }
  .orange {
    background: #ffb347;
  }
  .red {
    background: #dc3545;
  }
  .green {
    background: #198754;
  }
  .gray {
    background: gray;
  }
`

export default GridItem
