import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  // TOGGLE MENU
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/#" className="nav__logo">
          <img src={Logo} alt="logo" className="logo" />
          IRVAN
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active-link"
                to="home"
                spy={true}
                smooth={true}
                offset={-20}
                duration={200}
              >
                <i className="uil uil-estate nav__icon"></i> Beranda
              </Link>
              {/* <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Beranda
              </a> */}
            </li>

            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active-link"
                to="about"
                spy={true}
                offset={-20}
                smooth={true}
                duration={200}
              >
                <i className="uil uil-user nav__icon"></i> Tentang
              </Link>
            </li>

            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active-link"
                to="skills"
                spy={true}
                smooth={true}
                offset={-20}
                duration={200}
              >
                <i className="uil uil-cog nav__icon"></i> Keterampilan
              </Link>
            </li>

            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active-link"
                to="project"
                spy={true}
                offset={-20}
                smooth={true}
                duration={200}
              >
                <i className="uil uil-lightbulb-alt nav__icon"></i> Project
              </Link>
            </li>

            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active-link"
                to="qualification"
                spy={true}
                offset={-20}
                smooth={true}
                duration={200}
              >
                <i className="uil uil-award nav__icon"></i> Kualifikasi
              </Link>
            </li>

            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active-link"
                to="certificate"
                spy={true}
                offset={-20}
                smooth={true}
                duration={200}
              >
                <i className="uil uil-notebooks nav__icon"></i> Sertifikat
              </Link>
            </li>

            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active-link"
                to="contact"
                spy={true}
                offset={-20}
                smooth={true}
                duration={200}
              >
                <i className="uil uil-message nav__icon"></i> Kontak
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
