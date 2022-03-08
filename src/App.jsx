import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { MainPage } from "./pages/MainPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductPage } from "./pages/ProductPage";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/men" element={<CategoryPage />} />
        <Route path="/men/:id" element={<ProductPage />} />
        <Route path="/women" element={<CategoryPage />} />
        <Route path="/women/:id" element={<ProductPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
