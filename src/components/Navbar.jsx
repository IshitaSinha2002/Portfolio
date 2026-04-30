import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">▣</span>
        <span className="logo-text">DATA ANALYST</span>
      </div>

      <div className="navbar-links">
        <a href="#" className="nav-link active">ABOUT ME</a>
        <a href="#" className="nav-link">TECHNICAL SKILLS</a>
        <a href="#" className="nav-link">EXPERIENCE</a>
        <a href="#" className="nav-link">PROJECTS</a>
        <a href="#" className="nav-link">EDUCATION</a>
      </div>
    </nav>
  );
};

export default Navbar;