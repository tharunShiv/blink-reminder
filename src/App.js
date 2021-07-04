import "./styles/App.css";
import Header from "./components/Header.js";
import Background from "./components/Background.js";
import IntervalSelector from "./components/IntervalSelector.js";
import Instructions from "./components/Instructions.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <>
      <Header />
      <IntervalSelector />
      <Background />
      <Instructions />
    </>
  );
}

function Contact() {
  return (
    <>
      <Header />
      <Background />
      <div className="about-content">
        <p>
          A WebApp designed and built by{" "}
          <a className="about-link" href="https://www.tharunshiv.com/about">
            Tharun Shiv
          </a>
        </p>
        <p>
          Blink reminder is an effort to make it easier to take care of ones
          eyes. With the increasing work from home and work on laptop screens,
          we are only looking into the digital screen all day. When I came
          across the health advice that we have to blink our eyes often and
          computer screens prevent us from blinking our eyes, I wanted people to
          be reminded about the same.
        </p>
        <p>Please feel free to provide suggestions: asktharun@gmail.com</p>
        <p>
          This project is open sourced and available on Github:{" "}
          <a
            className="about-link"
            href="https://github.com/tharunShiv/blink-reminder"
          >
            Blink reminder - Github
          </a>
        </p>
      </div>
    </>
  );
}
export default App;
