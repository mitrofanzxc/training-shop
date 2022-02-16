import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { Productpage } from "./pages/Productpage";
import { Women } from "./pages/Women";

function App() {
  return (
    <div className="App" data-test-id="app">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
