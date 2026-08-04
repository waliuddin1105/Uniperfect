import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Uniperfect/Home";
import About from "./pages/Uniperfect/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Uniperfect Pages */}
        <Route path="/" element={<Home />} />
        <Route path="u/about" element={<About />} />

        {/* Superior Pages */}


      </Routes>
    </BrowserRouter>
  );
}