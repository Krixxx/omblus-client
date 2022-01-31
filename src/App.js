import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Dashboard, Error, Home, Worker } from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/worker"
          element={
            <PrivateRoute>
              <Worker />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
