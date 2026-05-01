import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="career-inner">

        <h2 className="projects-title">Projects</h2>

        <div className="projects-list">

          {/* ================= SECTION 1 ================= */}
          <div className="project-block">
            <p className="project-category">— Full Stack ML based Web</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card pink">
                <img src="public\CareerBloom.jpg" alt="project" />

                <div className="project-content">
                  <h3>Career Bloom</h3>
                  <p>
                    Full-stack ML application that recommends suitable career paths based on user skills, interests, and preferences using classification models.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Career-Bloom", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="project-card cyan-border">
                <img src="public\ResumeIQ.jpg" alt="project" />

                <div className="project-content">
                  <h3>Resume IQ</h3>
                  <p>
                    Full-stack NLP-based application that analyzes resumes and matches them with job descriptions using semantic similarity and text processing techniques.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/ResumeIQ", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="project-card pink">
                <img src="public\WattWise.jpg" alt="project" />

                <div className="project-content">
                    <h3>Watt Wise</h3>
                    <p>
                      Full-stack ML application that predicts energy consumption based on usage patterns and environmental factors using regression models.
                    </p>
                    <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Watt-Wise", "_blank")}>
  EXPLORE →
</span>
                </div>
            </div>

            {/* CARD 4 */}
              <div className="project-card cyan-border">
                <img src="public\FitPredict.jpg" alt="project" />

                <div className="project-content">
                  <h3>Fit Predict</h3>
                  <p>
                    Full-stack ML application that predicts calories burned based on fitness and workout data using regression models.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/FitPredict", "_blank")}>
  EXPLORE →
  </span>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="project-card pink">
                <img src="public\EmployeeBurnout.jpg" alt="project" />

                <div className="project-content">
                  <h3>Employee Burnout</h3>
                  <p>
                    Full-stack ML application that predicts employee burnout levels based on work and lifestyle factors using classification models.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Employee-Burnout-Predictor", "_blank")}>EXPLORE →</span>
                </div>
              </div>

            {/* CARD 6 */}
              <div className="project-card cyan-border">
                <img src="public\SmartLingo.jpg" alt="project" />

                <div className="project-content">
                  <h3>Smart Lingo</h3>
                  <p>
                    Full-stack language translation web app built with React and Flask, enabling real-time multilingual translation using external APIs.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/SmartLingo", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 7 */}
              <div className="project-card pink">
                <img src="public\CollegeAdmission.jpg" alt="project" />

                <div className="project-content">
                  <h3>College Admission</h3>
                  <p>
                    Regression-based ML pipeline for admission prediction with feature scaling, multi-model comparison, evaluation metrics, and dynamic inference with user-defined college input.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/College-Admission-Prediction", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

            </div>
            
          </div>

          {/* ================= SECTION 2 ================= */}
          <div className="project-block">
            <p className="project-category">— NLP</p>
            <div className="project-row">
            {/* CARD 1 */}
              <div className="project-card pink">
                <img src="public\SentimentAnalysis.jpg" alt="project" />

                <div className="project-content">
                  <h3>Sentiment Analysis</h3>
                  <p>
                    NLP-based sentiment analysis model that classifies tweets using TF-IDF and Logistic Regression with visualization and evaluation.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Twitter-Sentiment-Analysis", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="project-card cyan-border">
                <img src="public\EmotionDetector.jpg" alt="project" />

                <div className="project-content">
                  <h3>Emotion Detection</h3>
                  <p>
                    Multi-class NLP model for emotion classification using TF-IDF and Logistic Regression with visualization and evaluation.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Emotion-Detection", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="project-card pink">
                <img src="public\FakeNews.jpg" alt="project" />

                <div className="project-content">
                  <h3>Fake News Detector</h3>
                  <p>
                    NLP-based fake news classification model using TF-IDF and Logistic Regression with visualization and evaluation.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Fake-News-Detector", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="project-card cyan-border">
                <img src="public\NewsTopic.jpg" alt="project" />

                <div className="project-content">
                  <h3>News Topic Classifier</h3>
                  <p>
                    Multi-class NLP model for news classification using TF-IDF and Logistic Regression with visualization and evaluation.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/News-Topic-Classifier", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECTION 3 ================= */}
          <div className="project-block">
            <p className="project-category">— Full Stack MERN based Web App</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card pink">
                <img src="public\TravelNest.jpg" alt="project" />

                <div className="project-content">
                  <h3>Travel Nest</h3>
                  <p>
                    Full-stack hotel booking application built using the MERN stack.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/TravelNest", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

                {/* CARD 2 */}
              <div className="project-card cyan-border">
                <img src="public\Chatify.jpg" alt="project" />

                <div className="project-content">
                  <h3>Chatify</h3>
                  <p>
                    Full-stack real-time chat application built using the MERN stack and Firebase that enables seamless messaging, user authentication, and live data synchronization.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Chatify", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>
            </div>
          </div>
        {/* ================= SECTION 4 ================= */}
        <div className="project-block">
            <p className="project-category">— Dashboard</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card pink">
                <img src="public\BehaviourChurn.jpg" alt="project" />

                <div className="project-content">
                  <h3>Behavioural Churn Radar Dashboard</h3>
                  <p>
                    Full-stack data analytics application that visualizes and analyzes customer churn patterns using interactive dashboards and behavioral insights.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Behavioral-Churn-Radar-Dashboard", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;