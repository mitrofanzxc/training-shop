import MenCatalogHeader from "../components/MenCatalogHeader/MenCatalogHeader";
import MenCatalogFilter from "../components/MenCatalogFilter/MenCatalogFilter";
import MenCatalog from "../components/MenCatalog/MenCatalog";

const Men = () => {
  return (
    <div>
      <MenCatalogHeader />
      <MenCatalogFilter />
      <MenCatalog />
    </div>
  );
};

export { Men };
