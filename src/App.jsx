import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
    </div>
  );
};

export default App;