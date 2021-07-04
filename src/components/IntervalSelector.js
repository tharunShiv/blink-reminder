import React from "react";
import CountDownTimer from "./CountDownTimer.js";
import "../styles/section.css";

export default function Header() {
  const regularTimer = { hours: 0, minutes: 60, seconds: 0 };
  const shortInterval = { hours: 0, minutes: 30, seconds: 0 };
  const longInterval = { hours: 0, minutes: 90, seconds: 0 };
  const [interval, setInterval] = React.useState(regularTimer);
  const [isRegularTimer, setIsRegularTimer] = React.useState(true);
  const [isShortInterval, setIsShortInterval] = React.useState(false);
  const [isLongInterval, setIsLongInterval] = React.useState(false);

  const setNewInterval = (newInterval) => {
    setInterval(newInterval);

    setIsRegularTimer(false);
    setIsShortInterval(false);
    setIsLongInterval(false);

    if (newInterval.minutes === 90) {
      setIsLongInterval(true);
    } else if (newInterval.minutes === 60) {
      setIsRegularTimer(true);
    } else {
      setIsShortInterval(true);
    }
  };

  return (
    <>
      <div className="section">
        <div className="interval-selector-section">
          {isRegularTimer ? (
            <button
              onClick={() => setNewInterval(regularTimer)}
              className="regular-timer-button"
            >
              regular timer
            </button>
          ) : (
            <button
              onClick={() => setNewInterval(regularTimer)}
              className="regular-timer-button-inactive"
            >
              regular timer
            </button>
          )}
          {isShortInterval ? (
            <button
              onClick={() => setNewInterval(shortInterval)}
              className="short-interval-button-active"
            >
              short intervals
            </button>
          ) : (
            <button
              onClick={() => setNewInterval(shortInterval)}
              className="short-interval-button"
            >
              short intervals
            </button>
          )}
          {isLongInterval ? (
            <button
              onClick={() => setNewInterval(longInterval)}
              className="long-interval-button-active"
            >
              long intervals
            </button>
          ) : (
            <button
              onClick={() => setNewInterval(longInterval)}
              className="long-interval-button"
            >
              long intervals
            </button>
          )}
        </div>
        <div className="timer">
          <CountDownTimer hoursMinSecs={{ ...interval }} reset={shouldReset} />
        </div>
        <div className="section-timer-actions">
          {/* <button className="enable-notifications-button">
            Enable notifications
          </button> */}
          <button className="reset-button">Reset</button>
        </div>
      </div>
    </>
  );
}
