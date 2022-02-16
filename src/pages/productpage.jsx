import { ProductPageHeader } from "../components/ProductPageHeader";
import { ProductCard } from "../components/ProductCard";
import { RelatedProducts } from "../components/RelatedProducts";

const Productpage = () => {
  return (
    <div>
      <ProductPageHeader />
      <ProductCard />
      <RelatedProducts />
    </div>
  );
};

export { Productpage };
