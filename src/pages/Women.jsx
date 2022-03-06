import { CatalogHeader } from "../components/CatalogHeader/CatalogHeader";
import { CatalogFilter } from "../components/CatalogFilter/CatalogFilter";
import { Catalog } from "../components/Catalog/Catalog";

const Women = () => {
  return (
    <>
      <CatalogHeader />
      <CatalogFilter />
      <Catalog />
    </>
  );
};

export { Women };
