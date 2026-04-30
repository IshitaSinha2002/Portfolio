import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
};

export default App;