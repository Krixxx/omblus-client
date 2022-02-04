import React from "react"
import styled from "styled-components"

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"

const SendAlertButton = ({ handleAlert, alert, loading }) => {
  return (
    <ButtonWrapper>
      <div className="container">
        <button
          type="button"
          disabled={loading}
          onClick={handleAlert}
          className={`alert-btn ${alert ? "alert-on" : ""}`}
        >
          {!loading ? (
            <NotificationsActiveIcon className="alert-btn-icon" />
          ) : (
            <div className="spinner alert-btn-icon" />
          )}
        </button>
        <div className={`${alert ? "bg" : ""}`}></div>
      </div>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
  }
  .bg,
  .alert-btn {
    height: 5rem;
    width: 5rem;
    border-radius: 0.5rem;
  }
  .bg {
    position: absolute;
    animation: pulse 1.2s ease infinite;
    background: orange;
  }
  .alert-btn {
    background: gray;
  }
  @keyframes pulse {
    0% {
      transform: scale(1, 1);
    }
    50% {
      opacity: 0.3;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
  button {
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  }
  .alert-on {
    background: orange;
  }
  .alert-btn-icon {
    height: 2rem;
    width: 2rem;
  }
  .spinner {
    display: inline-block;
    border-color: #fff;
    border-style: solid;
    border-radius: 99999px;
    border-width: 3px;
    border-left-color: transparent;
    color: palevioletred;
    opacity: 0;
    animation-name: rotate, fadeIn;
    animation-duration: 450ms, 600ms;
    animation-timing-function: linear, ease;
    animation-iteration-count: infinite, 1;
    animation-delay: 200ms;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default SendAlertButton
