import React from "react";
import { SliderBanners } from "../components/SliderBanners/SliderBanners";
import { Benefits } from "../components/Benefits/Benefits";
import { WomensMain } from "../components/WomensMain/WomensMain";
import { MensMain } from "../components/MensMain/MensMain";
import { Banners } from "../components/Banners/Banners";
import { Subscribe } from "../components/Subscribe/Subscribe";
import { Blog } from "../components/Blog/Blog";

const Main = () => {
  return (
    <div>
      <SliderBanners />
      <Benefits />
      <WomensMain />
      <MensMain />
      <Banners />
      <Subscribe />
      <Blog />
    </div>
  );
};

export { Main };
