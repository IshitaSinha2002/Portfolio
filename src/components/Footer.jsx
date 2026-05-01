import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-left">
          <p>© 2026 ISHITA SINHA // DATA_SCIENCE_PORTFOLIO</p>
          <span className="footer-status">SYSTEM_STATUS: OPTIMAL</span>
        </div>

        <div className="footer-right">
          <a
            href="https://www.linkedin.com/in/ishitasinha16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>

          <a
            href="https://github.com/IshitaSinha2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ishitasinha16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
        >
        EMAIL
        </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;