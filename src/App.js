import "./styles/App.css";
import Header from "./components/Header.js";
import Background from "./components/Background.js";
import IntervalSelector from "./components/IntervalSelector.js";
import Instructions from "./components/Instructions.js";

function App() {
  return (
    <div className="main">
      <Header />
      <IntervalSelector />
      <Background />
      <Instructions />
    </div>
  );
}

export default App;
