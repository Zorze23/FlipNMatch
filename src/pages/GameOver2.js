import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

export default function GameOver({ onRetry }) {
  const navigate = useNavigate();

  return (
    <div className="overlay-text visible">
      <h1 className="go-title">
        GAME OVER
      </h1>

      <button className="pixel-btn" onClick={() => navigate('/medium')}
        >
        TRY AGAIN
        </button>

      <button
        className="pixel-btn"
        onClick={() => navigate("/")}
      >
        GO BACK TO MENU
      </button>
    </div>
  );
}