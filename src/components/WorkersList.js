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

  const gridview = useSelector((state) => state.filter.gridview)

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

  if (gridview === false) {
    return <ListView workers={workersList} />
  } else {
    return <GridView workers={workersList} />
  }
}

export default WorkersList
