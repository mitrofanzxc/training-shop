import { MenCatalogHeader } from "../components/MenCatalogHeader/MenCatalogHeader";
import { MenCatalogFilter } from "../components/MenCatalogFilter/MenCatalogFilter";
import { MenCatalog } from "../components/MenCatalog/MenCatalog";
import { useLocation } from "react-router-dom";

const Men = () => {
  const location = useLocation().pathname.slice(1);
  console.log(location);
  return (
    <div data-test-id={`products-page-${location}`}>
      <MenCatalogHeader />
      <MenCatalogFilter />
      <MenCatalog />
    </div>
  );
};

export { Men };
