import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-title"></div>
      <div className="developer-info" id="footer-santi">
        <div className="footer-name">
          <a href="https://santiago-portfolio.vercel.app/">
            Santiago Felizzola
          </a>
        </div>
        <div className="footer-icons-group">
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/santiago-felizzola-25802b185/">
              <i class="devicon-linkedin-plain"></i>
            </a>
          </div>
          <div className="footer-icons">
            <a href="https://github.com/santiagofelizzola">
              <i class="devicon-github-original"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="developer-info" id="footer-kenny">
        <div className="footer-name">
          <a href="https://kenny-portfolio-one.vercel.app/">Kenny Pham</a>
        </div>
        <div className="footer-icons-group">
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/kenny-phamily/">
              <i class="devicon-linkedin-plain"></i>
            </a>
          </div>
          <div className="footer-icons">
            <a href="https://github.com/KennyPham97">
              <i class="devicon-github-original"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="developer-info" id="footer-kenny">
        <div className="footer-name">
        <a href="https://web-dev-portfolio-nu.vercel.app/">Tony Vu</a>
        </div>
        <div className="footer-icons-group">
          <div className="footer-icons">
          <a href="https://www.linkedin.com/in/tony-vuu/">
              <i class="devicon-linkedin-plain"></i>
            </a>
          </div>
          <div className="footer-icons">
          <a href="https://github.com/tonyvuu">
              <i class="devicon-github-original"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
