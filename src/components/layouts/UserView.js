import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

import { UserItem, AddUserBar } from "../../components"

import { fetchAllUsers, selectAllUsers } from "../../app/slices/usersSlice"

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
      <div>
        {usersList.map((user) => {
          return <UserItem key={user.id} user={user} />
        })}
      </div>
    </>
  )
}

export default UserView
