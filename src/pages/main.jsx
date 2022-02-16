import { Header } from "../components/Header";
import { Sliderbanners } from "../components/Sliderbanners";
import { Benefits } from "../components/Benefits";
import { WomensMain } from "../components/Women's__main";
import { MensMain } from "../components/Men's__main";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Sliderbanners></Sliderbanners>
      <Benefits></Benefits>
      <WomensMain></WomensMain>
      <MensMain></MensMain>
    </div>
  );
};

export { Main };
