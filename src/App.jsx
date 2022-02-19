import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Productpage } from "./pages/Productpage";
import { Footer } from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div data-test-id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/men" element={<Men />} />
        <Route path="/men/1" element={<Productpage />} />
        <Route path="/men/2" element={<Productpage />} />
        <Route path="/men/3" element={<Productpage />} />
        <Route path="/men/4" element={<Productpage />} />
        <Route path="/men/5" element={<Productpage />} />
        <Route path="/men/6" element={<Productpage />} />
        <Route path="/men/7" element={<Productpage />} />
        <Route path="/men/8" element={<Productpage />} />
        <Route path="/women" element={<Women />} />
        <Route path="/women/1" element={<Productpage />} />
        <Route path="/women/2" element={<Productpage />} />
        <Route path="/women/3" element={<Productpage />} />
        <Route path="/women/4" element={<Productpage />} />
        <Route path="/women/5" element={<Productpage />} />
        <Route path="/women/6" element={<Productpage />} />
        <Route path="/women/7" element={<Productpage />} />
        <Route path="/women/8" element={<Productpage />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
