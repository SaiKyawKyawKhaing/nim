import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="/" className="logo d-flex align-items-center me-auto">
                <img src="./assets/img/logo.png" alt="Digitechvault" />
              </a>

              <div className="footer-contact pt-3">
                <p><strong>Address:</strong> We are serving in Myanmar, Thailand and Malaysia.</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+86 15919070082</span></p>
                <p><strong>Email:</strong> <span>info@afutelecom.com</span></p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="/">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Expertise</h4>
              <ul>
                <li>Regional Expertise</li>
                <li>AI Excellence</li>
                <li>Tailored Solutions</li>
                <li>Ethical AI</li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Social Media</h4>
              <div className="social-links mt-4">
                <a href="https://www.facebook.com/share/1BSi8JqdS4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/digitechvault/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div>© 2025 <strong>Next IT Myanmar</strong>. All Rights Reserved.</div>
            <div className="credits">
              Designed by <a href="#">NIM</a>
            </div>
          </div>

          <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href="https://www.facebook.com/share/1BSi8JqdS4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/digitechvault/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
}
