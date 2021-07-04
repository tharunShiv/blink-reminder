import React from "react";
import "../styles/CountDownTimer.css";
import UseSound from "use-sound";
import notifyOne from "../assets/sounds/notify-1.mp3";

const CountDownTimer = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [play] = UseSound(notifyOne);
  const [[hrs, mins, secs], setTime] = React.useState([
    hours,
    minutes,
    seconds,
  ]);
  const [currentMinutes, setCurrentInterval] = React.useState(60);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () => {
    play();
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  };

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  if (currentMinutes !== Number(minutes)) {
    setCurrentInterval(minutes);
    reset();
  }

  return (
    <div className="timer-section">
      <p className="timer">{`${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
    </div>
  );
};

export default CountDownTimer;
