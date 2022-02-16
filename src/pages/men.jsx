import MenCatalogHeader from "../components/MenCatalogHeader";
import MenCatalogFilter from "../components/MenCatalogFilter";
import MenCatalog from "../components/MenCatalog";

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