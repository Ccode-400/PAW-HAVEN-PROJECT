import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AdoptNow from "./pages/AdoptNow";
import Volunteer from "./pages/Volunteer";
import DonateNow from "./pages/DonateNow";
import ReportCase from "./pages/ReportCase";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt" element={<AdoptNow />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/report-case" element={<ReportCase />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;