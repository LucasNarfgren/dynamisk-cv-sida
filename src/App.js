import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import CV from "./Components/CV";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dynamisk-cv-sida" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cv" element={<CV />} /> 
      </Routes>
    </div>
  );
}
export default App;
