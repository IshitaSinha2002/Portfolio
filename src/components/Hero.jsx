import React from "react";

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">ISHITA SINHA</h1>

        <p className="hero-description">
          Results-driven Data Analyst skilled in Python, SQL, Power BI, and Tableau, with experience building end-to-end data solutions. Focused on turning complex data into actionable insights to drive business decisions.
        </p>

        <button className="hero-btn">DOWNLOAD RESUME</button>
      </div>

      <div className="hero-image">
        <img src="/self.jpeg" alt="profile" />
      </div>

      <div className="hero-glow"></div>
    </section>
  );
};

export default Hero;