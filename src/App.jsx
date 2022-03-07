import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductPage } from "./pages/ProductPage";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="men" element={<CategoryPage />} />
          <Route path="men/:id" element={<ProductPage />} />
          <Route path="women" element={<CategoryPage />} />
          <Route path="women/:id" element={<ProductPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
