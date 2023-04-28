import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Muhammad Irvan</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Tentang
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Kualifikasi
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Kontak
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/irvannih_/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/irvannih0/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://github.com/irvan99x"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/m-irvann/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Irvan. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
