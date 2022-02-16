import { Sliderbanners } from "../components/Sliderbanners";
import { Benefits } from "../components/Benefits";
import { WomensMain } from "../components/WomensMain";
import { MensMain } from "../components/MensMain";
import { Banners } from "../components/Banners";
import { Subscribe } from "../components/Subscribe";
import { Blog } from "../components/Blog";

const Main = () => {
  return (
    <div>
      <Sliderbanners />
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
