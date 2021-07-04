import "../styles/instructions.css";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="description">
        <p>
          Blinking of eyes might seem like an insignificant task. But
          surprisingly, the amount of screen time has a direct effect on your
          blinking frequency, decreasing it.{" "}
        </p>
        <p>
          Health experts time and being suggest that, blinking of eyes is
          essential to maintain eye health
        </p>
      </div>
      <div className="instructions">
        <p>
          &diams; Blink reminder will remind you at each interval with a
          notification sound.
        </p>

        <p>
          &diams; Look at a far off object and blink your eyes continuously for
          30 seconds
        </p>

        <p>&diams; Next, close your eyes for 60 seconds </p>

        <p>&diams; Repeat</p>
      </div>
    </>
  );
}
