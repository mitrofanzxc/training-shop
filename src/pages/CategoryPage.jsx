import { CatalogHeader } from "../components/CatalogHeader/CatalogHeader";
import { CatalogFilter } from "../components/CatalogFilter/CatalogFilter";
import { Catalog } from "../components/Catalog/Catalog";

const CategoryPage = (props) => {
  return (
    <>
      <CatalogHeader category={`${props.category}`} />
      <CatalogFilter />
      <Catalog category={`${props.category}`} />
    </>
  );
};

export { CategoryPage };
