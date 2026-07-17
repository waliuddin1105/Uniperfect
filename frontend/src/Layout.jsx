import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-3xl font-bold underline">Uniperfect</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}