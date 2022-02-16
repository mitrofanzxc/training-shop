import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App" data-test-id="app">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
