import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Uniperfect/Home";
import About from "./pages/Uniperfect/About";
import ProductsUniPerfect from "./pages/Uniperfect/ProductsUniPerfect";
import SuperiorHome from "./pages/Superior/SuperiorHome";
import SuperiorAbout from "./pages/Superior/SuperiorAbout";
import ProductsSuperior from "./pages/Superior/ProductsSuperior";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Uniperfect Pages below*/}
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