import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { Productpage } from "./pages/Productpage";
import { Women } from "./pages/Women";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
