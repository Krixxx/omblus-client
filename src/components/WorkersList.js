import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

import {
  selectAllWorkersList,
  fetchWorkersList,
} from "../app/slices/workersSlice"

import { GridView, ListView, UserView } from "../components"

const WorkersList = () => {
  const dispatch = useDispatch()

  const workersList = useSelector(selectAllWorkersList)
  const workersLoadingStatus = useSelector((state) => state.workers.status)
  const view = useSelector((state) => state.filter.view)
  const users = useSelector((state) => state.users.users)

  useEffect(() => {
    // if (workersLoadingStatus === "idle") {
    dispatch(fetchWorkersList())
    // }
  }, [dispatch, users])

  if (workersLoadingStatus === "loading") {
    return <h3 style={{ paddingTop: "2rem" }}>Laen andmeid..</h3>
  }

  if (view === "list") {
    return <ListView workers={workersList} />
  } else if (view === "grid") {
    return <GridView workers={workersList} />
  } else {
    return <UserView />
  }
}

export default WorkersList
