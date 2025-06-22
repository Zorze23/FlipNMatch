import React from "react";
import { useNavigate } from "react-router-dom";
import './win.css'

export default function Win({ onRetry }) {
  const navigate = useNavigate();

  return (
    <div className="overlay-win-text visible">
      <h1 className="win-go-title">
        CONGRATS
      </h1>

      <button className="pixel-win-btn" onClick={() => navigate('/easy')}
        >
        RESTART
        </button>

      <button
        className="pixel-win-btn"
        onClick={() => navigate("/")}
      >
        GO BACK TO MENU
      </button>
    </div>
  );
}