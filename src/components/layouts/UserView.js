import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

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
    <div>
      {usersList.map((user) => {
        return <p key={user.id}>{user.username}</p>
      })}
    </div>
  )
}

export default UserView
