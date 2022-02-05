import React from "react"

import Button from "@mui/material/Button"

const LogoutButton = ({ handleLogout }) => {
  return (
    <Button
      style={{ position: "fixed", bottom: "0", right: "0", margin: "1.5rem" }}
      variant="contained"
      onClick={handleLogout}
    >
      Logi välja
    </Button>
  )
}

export default LogoutButton
