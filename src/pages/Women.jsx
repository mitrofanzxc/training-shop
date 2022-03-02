import { WomenCatalogHeader } from "../components/WomenCatalogHeader/WomenCatalogHeader";
import { WomenCatalogFilter } from "../components/WomenCatalogFilter/WomenCatalogFilter";
import { WomenCatalog } from "../components/WomenCatalog/WomenCatalog";

const Women = () => {
  return (
    <>
      <WomenCatalogHeader />
      <WomenCatalogFilter />
      <WomenCatalog />
    </>
  );
};

export { Women };
