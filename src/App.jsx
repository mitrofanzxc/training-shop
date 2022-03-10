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
          <Route path="men" element={<CategoryPage category="men" />} />
          <Route path="men/:id" element={<ProductPage category="men" />} />
          <Route path="women" element={<CategoryPage category="women" />} />
          <Route path="women/:id" element={<ProductPage category="women" />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
