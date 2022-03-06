import { SliderBanners } from "../components/SliderBanners/SliderBanners";
import { Benefits } from "../components/Benefits/Benefits";
import { CatalogMain } from "../components/CatalogMain/CatalogMain";
import { Banners } from "../components/Banners/Banners";
import { Subscribe } from "../components/Subscribe/Subscribe";
import { Blog } from "../components/Blog/Blog";

const Main = () => {
  return (
    <>
      <SliderBanners />
      <Benefits />
      <CatalogMain category="women" />
      <CatalogMain category="men" />
      <Banners />
      <Subscribe />
      <Blog />
    </>
  );
};

export { Main };
