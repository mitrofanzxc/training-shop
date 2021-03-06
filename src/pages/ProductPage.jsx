import { useParams } from "react-router-dom";

import { PRODUCTS } from "../shared/Products";

import { ProductPageHeader } from "../components/ProductPageHeader/ProductPageHeader";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts";

const ProductPage = (props) => {
  // Take { id } from url
  const { id } = useParams();

  // Take filtered data
  const ProductPageFiltered = PRODUCTS[props.category].filter(
    (Product) => Product.id === `${id}`
  );

  // Take all necessary "props" from filtered data
  const ProductName = ProductPageFiltered[0].name;
  const ProductCategory = ProductPageFiltered[0].category;
  const ProductBrand = ProductPageFiltered[0].brand;
  const ProductReviews = ProductPageFiltered[0].reviews;
  const ProductRating = ProductPageFiltered[0].rating;
  const ProductImages = ProductPageFiltered[0].images;
  const ProductSizes = ProductPageFiltered[0].sizes;
  const ProductPrice = ProductPageFiltered[0].price;
  const ProductMaterial = ProductPageFiltered[0].material;
  const ProductId = ProductPageFiltered[0].id;
  return (
    <>
      <ProductPageHeader
        name={ProductName}
        category={ProductCategory}
        brand={ProductBrand}
        sizes={ProductSizes}
        reviews={ProductReviews}
        rating={ProductRating}
        id={ProductId}
      />
      <ProductCard
        category={ProductCategory}
        images={ProductImages}
        brand={ProductBrand}
        sizes={ProductSizes}
        price={ProductPrice}
        material={ProductMaterial}
        reviews={ProductReviews}
        rating={ProductRating}
      />
      <RelatedProducts category={ProductCategory} />
    </>
  );
};

export { ProductPage };
