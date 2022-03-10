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
  const ProductRating = ProductPageFiltered[0].rating;
  const ProductImages = ProductPageFiltered[0].images;
  const ProductSizes = ProductPageFiltered[0].sizes;
  const ProductPrice = ProductPageFiltered[0].price;
  const ProductMaterial = ProductPageFiltered[0].material;
  return (
    <>
      <ProductPageHeader
        category={ProductCategory}
        name={ProductName}
        reviews={ProductReviews}
        rating={ProductRating}
      />
      <ProductCard
        category={ProductCategory}
        images={ProductImages}
        sizes={ProductSizes}
        price={ProductPrice}
        material={ProductMaterial}
        reviews={ProductReviews}
        rating={ProductRating}
      />
      <RelatedProducts />
    </>
  );
};

export { ProductPage };
