import React from "react"

import DeleteIcon from "@mui/icons-material/Delete"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Button from "@mui/material/Button"

import { useDispatch, useSelector } from "react-redux"

import { deleteUser } from "../../app/slices/usersSlice"

const UserItem = ({ user }) => {
  const dispatch = useDispatch()

  const loggedUser = useSelector((state) => state.auth.user)

  const handleDelete = (id, username) => {
    if (loggedUser.name !== username) {
      dispatch(deleteUser(id))
    } else {
      alert("Enda kasutajat ei saa kustutada!")
    }
  }

  return (
    <TableRow>
      <TableCell>{user.username}</TableCell>
      <TableCell align="right">
        {user.role === "admin" ? "Meister" : "Õmbleja"}
      </TableCell>
      <TableCell align="right">
        <Button onClick={() => handleDelete(user.id, user.username)}>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default UserItem
