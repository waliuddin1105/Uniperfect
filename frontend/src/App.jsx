import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Uniperfect/Home";
import About from "./pages/Uniperfect/About";
import ProductsUniPerfect from "./pages/Uniperfect/ProductsUniPerfect";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Uniperfect Pages below*/}
        <Route path="/" element={<Home />} />
        <Route path="/u/about" element={<About />} />
        <Route path="/u/products" element={<ProductsUniPerfect />} />

        {/* Superior Pages */}


      </Routes>
    </BrowserRouter>
  );
}