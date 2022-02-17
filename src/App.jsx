import React from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app" data-test-id="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
