import React from "react"
import styled from "styled-components"

//MUI Icons
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral"
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt"

const AskWorkButton = ({ handleClick, working, loading }) => {
  return (
    <ButtonWrapper>
      <button
        type="button"
        disabled={loading}
        onClick={handleClick}
        className={`ask-work-btn ${working ? "red" : ""}`}
      >
        {!loading ? (
          working ? (
            <SentimentNeutralIcon className="ask-btn-icon" />
          ) : (
            <SentimentSatisfiedAltIcon className="ask-btn-icon" />
          )
        ) : (
          <div className="spinner ask-btn-icon" />
        )}
        <p>{working ? "Küsi tööd" : "Lõpeta küsimine"}</p>
      </button>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  button {
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  }
  p {
    padding-top: 1rem;
    color: white;
  }
  .ask-work-btn {
    padding: 2rem 2rem 1rem 2rem;
    background: #198754;
    font-size: 1.4rem;
    min-width: 17rem;
  }
  .ask-btn-icon {
    width: 4rem;
    height: 4rem;
  }
  .red {
    background: #dc3545;
  }
  .spinner {
    display: inline-block;
    border-color: #fff;
    border-style: solid;
    border-radius: 99999px;
    border-width: 7px;
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

export default AskWorkButton
