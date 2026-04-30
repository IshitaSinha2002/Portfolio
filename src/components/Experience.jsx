import React from "react";

const Experience = () => {
  return (
    <section className="career">
        <div className="career-inner"></div>
            <h2 className="career-title">Work Experience</h2>

            <div className="timeline">

        {/* LINE */}
        <div className="timeline-line"></div>

        {/* ITEM 1 */}
        <div className="timeline-item">
          <div className="timeline-dot top"></div>

          <div className="timeline-card pink">
            <p className="timeline-year"> Aug 2024 - Present</p>
            <h3>Data Analyst</h3>
            <p className="company pink-text">Boston Scientific</p>
            <p>
              Worked on enterprise-scale analytics, building interactive dashboards and data pipelines to drive business decisions. Applied statistical analysis and predictive modeling to uncover trends, optimize performance, and enable data-driven strategy.
            </p>

            <div className="tags">
              <span>PYTHON</span>
              <span>TABLEAU</span>
              <span>SQL</span>
              <span>POWER BI</span>
              <span>DATA ANALYSIS</span>
              <span>ETL</span>
              <span>MACHINE LEARNING</span>
            </div>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="timeline-item">
          <div className="timeline-dot cyan"></div>

          <div className="timeline-card cyan-border">
            <p className="timeline-year">Jan 2024 - Jul 2024</p>
            <h3>IT Intern</h3>
            <p className="company cyan-text">Boston Scientific</p>
            <p>
              Developed BI dashboards and automated ETL workflows to transform multi-source data into actionable insights. Built enterprise tools and SharePoint-based systems to improve accessibility, reporting efficiency, and cross-team decision-making.
            </p>

            <div className="tags">
              <span>POWER BI</span>
              <span>TABLEAU</span>
              <span>POWER QUERY</span>
              <span>EXCEL</span>
              <span>SHAREPOINT</span>
              <span>POWER AUTOMATE</span>
              <span>POWER TRANSFORMATION</span>
            </div>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="timeline-item">
          <div className="timeline-dot top"></div>

          <div className="timeline-card pink">
            <p className="timeline-year"> May 2023 - Jul 2023</p>
            <h3>Software Developer Intern</h3>
            <p className="company pink-text">ElasticRun</p>
            <p>
              Built a user access management system using backend frameworks, focusing on secure role-based access and system logging. Improved system reliability through automated testing and scalable database design.
            </p>

            <div className="tags">
              <span>PYTHON</span>
              <span>FRAPPE FRAMEWORK</span>
              <span>MYSQL</span>
              <span>BACKEND INTEGRATION</span>
              <span>UNIT TESTING</span>
              <span>SYSEM DESIGN</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;