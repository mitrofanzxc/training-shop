import { useParams } from "react-router-dom";

import { PRODUCTS } from "../shared/Products";

import { ProductPageHeader } from "../components/ProductPageHeader/ProductPageHeader";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts";

const ProductPage = (props) => {
  const { id } = useParams();
  const ProductPageFiltered = PRODUCTS[props.category].filter(
    (Product) => Product.id === `${id}`
  );
  const ProductName = ProductPageFiltered[0].name;
  const ProductCategory = ProductPageFiltered[0].category;
  const ProductReviews = ProductPageFiltered[0].reviews;
  return (
    <>
      <ProductPageHeader
        name={ProductName}
        category={ProductCategory}
        reviews={ProductReviews}
      />
      <ProductCard data={`${ProductPageFiltered}`} />
      <RelatedProducts data={`${ProductPageFiltered}`} />
    </>
  );
};

export { ProductPage };
