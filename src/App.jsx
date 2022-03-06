import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Main } from "./pages/Main";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { ProductPage } from "./pages/ProductPage";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="men" element={<Men />} />
          <Route path="men/:id" element={<ProductPage />} />
          <Route path="women" element={<Women />} />
          <Route path="women/:id" element={<ProductPage />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
