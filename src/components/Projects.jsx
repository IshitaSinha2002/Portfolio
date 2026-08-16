import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="career-inner">

        <h2 className="projects-title">Projects</h2>

        <div className="projects-list">

          {/* ================= SECTION 1: MAIN PROJECTS ================= */}
          <div className="project-block">
            <p className="project-category">— Main Projects</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card pink">
                <img src="/ArchLens.jpg" alt="ArchLens" />

                <div className="project-content">
                  <h3>ArchLens</h3>
                  <p>
                    AI-powered Architecture Review Board simulator that analyzes enterprise architectures using LangChain, LangGraph, and LLMs to generate governance reviews, risk assessments, architecture scorecards, and actionable recommendations.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/ArchLens", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="project-card cyan-border">
                <img src="/PrepAI.jpg" alt="PrepAI" />

                <div className="project-content">
                  <h3>PrepAI</h3>
                  <p>
                    AI-powered Interview Preparation System built using ReactJS, FastAPI, LangChain, and Groq LLM that generates a personalized career roadmap, schedules, and question-answering through structured AI outputs.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/PrepAI", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="project-card pink">
                <img src="/ItineraAI.jpg" alt="ItineraAI" />

                <div className="project-content">
                  <h3>ItineraAI</h3>
                  <p>
                    AI-powered Travel Planner with a ReactJS frontend and FastAPI backend that generates personalized travel schedules using LangChain and Groq LLM through structured AI outputs.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/ItineraAI", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

            </div>
          </div>

          {/* ================= SECTION 2: MULTI-AGENT SYSTEMS ================= */}
          <div className="project-block">
            <p className="project-category">— Multi-Agent Systems</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card cyan-border">
                <img src="/UniDecideAI.jpg" alt="UniDecide AI" />

                <div className="project-content">
                  <h3>UniDecide AI</h3>
                  <p>
                    AI-powered university selection committee built with LangChain and LangGraph, where multiple advisor agents evaluate universities from different perspectives and a final committee makes the recommendation.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/UniDecide-AI", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="project-card pink">
                <img src="/MovieCouncil.jpg" alt="MovieCouncil" />

                <div className="project-content">
                  <h3>MovieCouncil</h3>
                  <p>
                    AI-powered movie recommendation system built using LangChain and LangGraph, where specialized agents evaluate movies from different perspectives before a final committee selects one recommendation.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/MovieCouncil", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="project-card cyan-border">
                <img src="/ResQAI.jpg" alt="ResQ-AI" />

                <div className="project-content">
                  <h3>ResQ-AI</h3>
                  <p>
                    Multi-agent disaster response system using LangChain and LangGraph, where specialized AI commanders coordinate emergency operations into a unified response plan.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/ResQ-AI", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

            </div>
          </div>

          {/* ================= SECTION 3: WORKFLOWS ================= */}
          <div className="project-block">
            <p className="project-category">— Workflows</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card pink">
                <img src="/EscapeRoomSolverAI.jpg" alt="Escape Room Solver AI" />

                <div className="project-content">
                  <h3>Escape Room Solver AI</h3>
                  <p>
                    A stateful LLM workflow using LangChain and LangGraph that analyzes clues, tracks inventory and room state, and iteratively solves an escape room puzzle.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Escape-Room-Solver-AI", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="project-card cyan-border">
                <img src="/LanguageLearnerAI.jpg" alt="Language Learner AI" />

                <div className="project-content">
                  <h3>Language Learner AI</h3>
                  <p>
                    A stateful LLM workflow using LangChain and LangGraph that generates personalized lessons, evaluates quizzes, tracks learner progress, and adapts future lessons over time.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Language-Learner-AI", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

            </div>
          </div>

          {/* ================= SECTION 4: PLANNING SYSTEM ================= */}
          <div className="project-block">
            <p className="project-category">— Planning System</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card pink">
                <img src="/StartupBuilderAI.jpg" alt="StartupBuilder AI" />

                <div className="project-content">
                  <h3>StartupBuilder AI</h3>
                  <p>
                    A stateful LLM planning system using LangChain and LangGraph that transforms a startup idea into an MVP strategy, milestones, roadmap, hiring plan, and actionable execution plan.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Startup-Builder-AI", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

            </div>
          </div>

          {/* ================= SECTION 5: REFLECTION SYSTEM ================= */}
          <div className="project-block">
            <p className="project-category">— Reflection System</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card cyan-border">
                <img src="/PromptOptimizer.jpg" alt="Prompt Optimizer" />

                <div className="project-content">
                  <h3>Prompt Optimizer</h3>
                  <p>
                    An LLM-powered reflection system using LangChain and LangGraph that iteratively critiques and refines prompts to improve their clarity and effectiveness.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Prompt-Optimizer", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="project-card pink">
                <img src="/CodeReviewer.jpg" alt="Code Reviewer" />

                <div className="project-content">
                  <h3>Code Reviewer</h3>
                  <p>
                    An LLM-powered reflection system using LangChain and LangGraph that iteratively reviews and refines code until it meets defined quality checks.
                  </p>
                  <span className="project-link" onClick={() => window.open("https://github.com/IshitaSinha2002/Code-Reviewer", "_blank")}>
  EXPLORE →
</span>
                </div>
              </div>

            </div>
          </div>

          {/* ================= SECTION 6: FULL STACK ML BASED WEB ================= */}
          <div className="project-block">
            <p className="project-category">— Full Stack ML based Web</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card pink">
                <img src="/CareerBloom.jpg" alt="project" />

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
                <img src="/ResumeIQ.jpg" alt="project" />

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

            </div>

          </div>

          {/* ================= SECTION 7: DASHBOARD ================= */}
          <div className="project-block">
            <p className="project-category">— Dashboard</p>

            <div className="project-row">

              {/* CARD 1 */}
              <div className="project-card pink">
                <img src="/BehaviourChurn.jpg" alt="project" />

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