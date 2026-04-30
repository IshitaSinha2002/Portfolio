import React from "react";

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="career-inner">

        <h2 className="education-title">Education</h2>

        <div className="education-grid">

          {/* ================= CARD 1 ================= */}
          <div className="education-card pink">

            <div className="edu-left">
              <div className="edu-icon pink-bg">🎓</div>
            </div>

            <div className="edu-content">
              <h3>Sikkim Manipal Institute of Technology</h3>
              <p className="edu-degree">Bachelor of Technology (BTech)</p>

              <div className="edu-stats">
                <div>
                  <span className="label">CGPA</span>
                  <p>8.4</p>
                </div>

                <div>
                  <span className="label">Stream</span>
                  <p>Engineering</p>
                </div>
              </div>
            </div>

          </div>


          {/* ================= CARD 2 ================= */}
          <div className="education-card cyan-border">

            <div className="edu-left">
              <div className="edu-icon cyan-bg">🏫</div>
            </div>

            <div className="edu-content">
              <h3>Don Bosco Academy</h3>

              <div className="edu-stats boxed">

                <div className="edu-stat-card">
                  <span>Class 12</span>
                  <p>77%</p>
                </div>

                <div className="edu-stat-card">
                  <span>Class 10</span>
                  <p>86%</p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;