import { CatalogHeader } from "../components/CatalogHeader/CatalogHeader";
import { CatalogFilter } from "../components/CatalogFilter/CatalogFilter";
import { Catalog } from "../components/Catalog/Catalog";

const Men = () => {
  return (
    <>
      <CatalogHeader />
      <CatalogFilter />
      <Catalog />
    </>
  );
};

export { Men };
