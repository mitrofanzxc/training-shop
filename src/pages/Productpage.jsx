import { ProductPageHeader } from "../components/ProductPageHeader/ProductPageHeader";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts";

const ProductPage = () => {
  return (
    <>
      <ProductPageHeader />
      <ProductCard />
      <RelatedProducts />
    </>
  );
};

export { ProductPage };
