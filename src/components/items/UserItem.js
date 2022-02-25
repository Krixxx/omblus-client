import React from "react"

import DeleteIcon from "@mui/icons-material/Delete"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Button from "@mui/material/Button"

const UserItem = ({ user }) => {
  const handleDelete = (id) => {
    console.log(id)
  }

  return (
    <TableRow>
      <TableCell>{user.username}</TableCell>
      <TableCell align="right">{user.role}</TableCell>
      <TableCell align="right">
        <Button onClick={() => handleDelete(user.id)}>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default UserItem
