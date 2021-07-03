import React from "react";
import CountDownTimer from "./CountDownTimer.js";
import "../styles/section.css";

export default function Header() {
  return (
    <>
      <div className="section">
        <div className="interval-selector-section">
          <button className="regular-timer-button">regular timer</button>
          <button className="short-interval-button">short intervals</button>
          <button className="long-interval-button">long intervals</button>
        </div>
        <div className="timer">
          <CountDownTimer hoursMinSecs={{ minutes: 90, seconds: 0 }} />
        </div>
      </div>
    </>
  );
}
