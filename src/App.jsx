import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app" data-test-id="app">
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/men" />
        <Route path="/women" />
        <Route path="/productpage" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
