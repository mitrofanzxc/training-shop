import { useParams } from "react-router-dom";

import { ProductPageHeader } from "../components/ProductPageHeader/ProductPageHeader";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts";

const ProductPage = () => {
  const { id } = useParams();
  console.log({ id });
  return (
    <>
      <ProductPageHeader id={{ id }} />
      <ProductCard id={{ id }} />
      <RelatedProducts id={{ id }} />
    </>
  );
};

export { ProductPage };
