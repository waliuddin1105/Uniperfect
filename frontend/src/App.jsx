import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { useEffect } from "react";

import Home from "./pages/Uniperfect/Home";
import About from "./pages/Uniperfect/About";
import ProductsUniPerfect from "./pages/Uniperfect/ProductsUniPerfect";

import SuperiorHome from "./pages/Superior/SuperiorHome";
import SuperiorAbout from "./pages/Superior/SuperiorAbout";
import ProductsSuperior from "./pages/Superior/ProductsSuperior";


// Scroll to top whenever the route/page changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default function App() {
  return (
    <BrowserRouter>

      {/* Automatically scrolls to top when navigating to another page */}
      <ScrollToTop />

      <Routes>

        {/* Uniperfect Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/u/about" element={<About />} />
        <Route path="/u/products" element={<ProductsUniPerfect />} />

        {/* Superior Pages */}
        <Route path="/s" element={<SuperiorHome />} />
        <Route path="/s/about" element={<SuperiorAbout />} />
        <Route path="/s/products" element={<ProductsSuperior />} />

      </Routes>

    </BrowserRouter>
  );
}