import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app" data-test-id="app">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
