import WomenCatalogHeader from "../components/WomenCatalogHeader";
import WomenCatalogFilter from "../components/WomenCatalogFilter";
import WomenCatalog from "../components/WomenCatalog";

const Women = () => {
  return (
    <div>
      <WomenCatalogHeader />
      <WomenCatalogFilter />
      <WomenCatalog />
    </div>
  );
};

export { Women };