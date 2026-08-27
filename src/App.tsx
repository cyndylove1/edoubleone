import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import "./App.css";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
