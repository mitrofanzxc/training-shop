import { SliderBanners } from "../components/SliderBanners/SliderBanners";
import { Benefits } from "../components/Benefits/Benefits";
import { CatalogMain } from "../components/CatalogMain/CatalogMain";
import { Banners } from "../components/Banners/Banners";
import { SubscribePrimary } from "../components/SubscribePrimary/SubscribePrimary";
import { Blog } from "../components/Blog/Blog";

const MainPage = () => {
  return (
    <>
      <SliderBanners />
      <Benefits />
      <CatalogMain category="women" />
      <CatalogMain category="men" />
      <Banners />
      <SubscribePrimary />
      <Blog />
    </>
  );
};

export { MainPage };
