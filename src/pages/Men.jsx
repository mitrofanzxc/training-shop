import { MenCatalogHeader } from "../components/MenCatalogHeader/MenCatalogHeader";
import { MenCatalogFilter } from "../components/MenCatalogFilter/MenCatalogFilter";
import { MenCatalog } from "../components/MenCatalog/MenCatalog";

const Men = () => {
  return (
    <>
      <MenCatalogHeader />
      <MenCatalogFilter />
      <MenCatalog />
    </>
  );
};

export { Men };
