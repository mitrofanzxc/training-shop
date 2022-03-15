import React, { useEffect } from "react";

import ReactDOM from "react-dom";

import { HashRouter, useLocation } from "react-router-dom";

import { App } from "./App";

import reportWebVitals from "./reportWebVitals";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export { ScrollToTop };

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
