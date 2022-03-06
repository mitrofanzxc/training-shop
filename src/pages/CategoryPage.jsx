import { CatalogHeader } from "../components/CatalogHeader/CatalogHeader";
import { CatalogFilter } from "../components/CatalogFilter/CatalogFilter";
import { Catalog } from "../components/Catalog/Catalog";

const CategoryPage = (props) => {
  return (
    <>
      <CatalogHeader />
      <CatalogFilter />
      <Catalog category={`${props.path}`} />
    </>
  );
};

export { CategoryPage };
