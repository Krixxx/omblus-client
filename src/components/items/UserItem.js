import React from "react"

import DeleteIcon from "@mui/icons-material/Delete"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Button from "@mui/material/Button"

import { useDispatch } from "react-redux"

import { deleteUser } from "../../app/slices/usersSlice"

const UserItem = ({ user }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }

  return (
    <TableRow>
      <TableCell>{user.username}</TableCell>
      <TableCell align="right">
        {user.role === "admin" ? "Meister" : "Õmbleja"}
      </TableCell>
      <TableCell align="right">
        <Button onClick={() => handleDelete(user.id)}>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default UserItem
