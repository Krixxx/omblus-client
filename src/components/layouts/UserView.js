import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

import { UserItem, AddUserBar } from "../../components"

import { fetchAllUsers, selectAllUsers } from "../../app/slices/usersSlice"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Typography from "@mui/material/Typography"

const UserView = () => {
  const dispatch = useDispatch()

  const usersList = useSelector(selectAllUsers)
  const usersLoadingStatus = useSelector((state) => state.users.status)

  useEffect(() => {
    if (usersLoadingStatus === "idle") {
      dispatch(fetchAllUsers())
    }
  }, [dispatch, usersLoadingStatus])

  return (
    <>
      <AddUserBar />
      <Container>
        <TableContainer
          component={Paper}
          style={{ maxWidth: 650, margin: "auto" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Kasutaja ID</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">Roll</Typography>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList.map((user) => {
                return <UserItem key={user.id} user={user} />
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default UserView

//  <div>
//         {usersList.map((user) => {
//           return <UserItem key={user.id} user={user} />
//         })}
//       </div>
