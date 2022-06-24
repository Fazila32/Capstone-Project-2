import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

import Navbar from "./Navbar";
import Main from "../Pages/Home";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";
import Resume from "../Pages/Resume";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
