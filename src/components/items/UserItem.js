import React from "react"

import DeleteIcon from "@mui/icons-material/Delete"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { useDispatch, useSelector } from "react-redux"

import { deleteUser } from "../../app/slices/usersSlice"

const UserItem = ({ user }) => {
  const dispatch = useDispatch()

  const loggedUser = useSelector((state) => state.auth.user)

  const handleDelete = (id, username) => {
    dispatch(deleteUser(id))
  }

  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{user.username}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="body1">
          {user.role === "admin" ? "Meister" : "Õmbleja"}
        </Typography>
      </TableCell>
      <TableCell align="right">
        {loggedUser.name !== user.username && (
          <Button onClick={() => handleDelete(user.id, user.username)}>
            <DeleteIcon />
          </Button>
        )}
      </TableCell>
    </TableRow>
  )
}

export default UserItem
