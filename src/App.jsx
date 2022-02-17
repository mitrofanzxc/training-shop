import React from "react";
import { Header } from "./components/Header/Header";
import { SliderBanners } from "./components/SliderBanners/SliderBanners";
import { Benefits } from "./components/Benefits/Benefits";
import { WomensMain } from "./components/WomensMain/WomensMain";
import { MensMain } from "./components/MensMain/MensMain";
import { Banners } from "./components/Banners/Banners";
import { Subscribe } from "./components/Subscribe/Subscribe";
import { Blog } from "./components/Blog/Blog";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app" data-test-id="app">
      <Header />
      <SliderBanners />
      <Benefits />
      <WomensMain />
      <MensMain />
      <Banners />
      <Subscribe />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
