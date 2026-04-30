import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">▣</span>
        <span className="logo-text">DATA ANALYST</span>
      </div>

      <div className="navbar-links">
        <a href="#about" className="nav-link active">ABOUT ME</a>
        <a href="#skills" className="nav-link">TECHNICAL SKILLS</a>
        <a href="#experience" className="nav-link">EXPERIENCE</a>
        <a href="#projects" className="nav-link">PROJECTS</a>
        <a href="#education" className="nav-link">EDUCATION</a>
      </div>
    </nav>
  );
};

export default Navbar;