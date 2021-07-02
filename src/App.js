import "./styles/App.css";
import Header from "./components/Header.js";
import CountDownTimer from "./components/CountDownTimer";
import BgOne from "./assets/images/bg-1.svg";
import BgTwo from "./assets/images/bg-2.svg";

function App() {
  return (
    <div className="main">
      <Header />
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
      <img src={BgOne} alt="bg" className="bgOne-image" />
      <img src={BgTwo} alt="bg" className="bgTwo-image" />
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
          notification sound. Please blink your eyes continuously for 30 seconds
          until you receive the next notification sound.{" "}
        </p>

        <p>&diams; Next, close your eyes for 60 seconds </p>

        <p>&diams; Repeat</p>
      </div>
    </div>
  );
}

export default App;
