import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

import { fetchAllUsers, selectAllUsers } from "../../app/slices/usersSlice"

const UserView = () => {
  const dispatch = useDispatch()

  const usersList = useSelector(selectAllUsers)
  const usersLoadingStatus = useSelector((state) => state.users.status)

  console.log(usersList)

  useEffect(() => {
    if (usersLoadingStatus === "idle") {
      dispatch(fetchAllUsers())
    }
  }, [dispatch, usersLoadingStatus])

  return <div>{usersList}</div>
}

export default UserView
