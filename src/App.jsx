import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
// import { Productpage } from "./pages/Productpage";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app" data-test-id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
