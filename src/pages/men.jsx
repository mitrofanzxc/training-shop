import React from "react";

import { MenCatalogHeader } from "../components/MenCatalogHeader/MenCatalogHeader";
import { MenCatalogFilter } from "../components/MenCatalogFilter/MenCatalogFilter";
import { MenCatalog } from "../components/MenCatalog/MenCatalog";

const Men = () => {
  return (
    <div data-test-id="products-page-men">
      <MenCatalogHeader />
      <MenCatalogFilter />
      <MenCatalog />
    </div>
  );
};

export { Men };
