import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import "./App.css";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import TermsOfService from "./pages/terms";
import SecurityPolicy from "./pages/security-policy";
import PrivacyPolicy from "./pages/privacy-policy";

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
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/security-policy" element={<SecurityPolicy/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
