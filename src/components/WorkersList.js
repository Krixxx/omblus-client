import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

import {
  selectAllWorkersList,
  fetchWorkersList,
} from "../app/slices/workersSlice"

import { GridView, ListView } from "../components"

const WorkersList = () => {
  const dispatch = useDispatch()

  const workersList = useSelector(selectAllWorkersList)
  const workersLoadingStatus = useSelector((state) => state.workers.status)

  const view = useSelector((state) => state.filter.view)

  useEffect(() => {
    if (workersLoadingStatus === "idle") {
      dispatch(fetchWorkersList())
    }
  }, [dispatch, workersLoadingStatus])

  if (workersLoadingStatus === "loading") {
    return <h3 style={{ paddingTop: "2rem" }}>Laen andmeid..</h3>
  }

  if (workersList.length < 1) {
    return (
      <h3 style={{ paddingTop: "2rem" }}>Ühtegi töötajat pole sisse loginud</h3>
    )
  }

  if (view === "list") {
    return <ListView workers={workersList} />
  } else if (view === "grid") {
    return <GridView workers={workersList} />
  } else {
    return <h2>Here we will manage app users</h2>
  }
}

export default WorkersList
