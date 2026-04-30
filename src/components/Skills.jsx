import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="career-inner">

        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-grid">

          {/* LANGUAGES */}
          <div className="skill-card pink">
            <h3>Languages</h3>
            <div className="tags">
              <span>PYTHON</span>
              <span>SQL</span>
              <span>JAVA</span>
              <span>JAVASCRIPT</span>
            </div>
          </div>

          {/* DATA VISUALIZATION */}
          <div className="skill-card cyan-border">
            <h3>Data Visualization</h3>
            <div className="tags">
              <span>TABLEAU</span>
              <span>POWER BI</span>
              <span>MATPLOTLIB</span>
              <span>SEABORN</span>
            </div>
          </div>

          {/* DATA ANALYSIS */}
          <div className="skill-card pink">
            <h3>Data Analysis</h3>
            <div className="tags">
              <span>PANDAS</span>
              <span>NUMPY</span>
              <span>EXCEL</span>
              <span>EDA</span>
              <span>TABLEAU PREP BUILDER</span>
              <span>POWER QUERY</span>
            </div>
          </div>

          {/* MACHINE LEARNING */}
          <div className="skill-card cyan-border">
            <h3>Machine Learning</h3>
            <div className="tags">
              <span>SUPERVISED LEARNING</span>
              <span>UNSUPERVISED LEARNING</span>
              <span>FEATURE ENGINEERING</span>
              <span>NLP</span>
            </div>
          </div>

          {/* DATABASES */}
          <div className="skill-card pink">
            <h3>Databases</h3>
            <div className="tags">
              <span>MYSQL</span>
              <span>MONGODB</span>
              <span>FIREBASE</span>
            </div>
          </div>

          {/* TOOLS */}
          <div className="skill-card cyan-border">
            <h3>Tools & Platform</h3>
            <div className="tags">
              <span>GITHUB</span>
              <span>JUPYTER NOTEBOOK</span>
              <span>VS CODE</span>
              <span>POSTMAN</span>
              <span>FIGMA</span>
            </div>
          </div>

          {/* FRAMEWORK */}
          <div className="skill-card pink">
            <h3>Framework & Automation</h3>
            <div className="tags">
              <span>REACTJS</span>
              <span>MODEJS</span>
              <span>EXPRESSJS</span>
              <span>FRAPPE</span>
              <span>SELENIUM</span>
              <span>POWER AUTOMATE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;