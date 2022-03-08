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
          <Route path="men" element={<CategoryPage />}>
            <Route path=":id" element={<ProductPage />} />
          </Route>
          <Route path="women" element={<CategoryPage />}>
            <Route path=":id" element={<ProductPage />} />
          </Route>
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
