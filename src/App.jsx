import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Main } from "./pages/Main";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductPage } from "./pages/ProductPage";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="men" element={<CategoryPage />} />
          <Route path="men/:id" element={<ProductPage />} />
          <Route path="women" element={<CategoryPage />} />
          <Route path="women/:id" element={<ProductPage />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
