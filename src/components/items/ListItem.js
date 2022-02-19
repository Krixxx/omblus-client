import React from "react"
import styled from "styled-components"

import Cross from "@mui/icons-material/Clear"
import Info from "@mui/icons-material/Info"
import Check from "@mui/icons-material/Check"
import NoUser from "@mui/icons-material/PersonRemove"

const ListItem = ({ working, username, alert, loggedIn }) => {
  return (
    <Wrapper className="table-row">
      <td>
        <div
          className={`item-color ${
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
        </div>
      </td>
      <td>{username}</td>
      <td>
        {loggedIn
          ? alert
            ? "probleem"
            : working
            ? "töötan"
            : "ootan tööd"
          : "välja logitud"}
      </td>
    </Wrapper>
  )
}

const Wrapper = styled.tr`
  td {
    padding-top: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgray;
    text-transform: capitalize;
  }
  .item-color {
    width: 100px;
    height: 25px;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
  }
  .icon {
    color: white;
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

export default ListItem
