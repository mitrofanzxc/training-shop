import { WomenCatalogHeader } from "../components/WomenCatalogHeader/WomenCatalogHeader";
import { WomenCatalogFilter } from "../components/WomenCatalogFilter/WomenCatalogFilter";
import { WomenCatalog } from "../components/WomenCatalog/WomenCatalog";

const Women = () => {
  return (
    <div data-test-id={`products-page-women`}>
      <WomenCatalogHeader />
      <WomenCatalogFilter />
      <WomenCatalog />
    </div>
  );
};

export { Women };
