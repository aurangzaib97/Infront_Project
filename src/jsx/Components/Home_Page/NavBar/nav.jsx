import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-light"
        style={{ backgroundColor: "#005cb9" }}
      >
        <Link to="/" className="navbar-brand ml-4 resLogo">
          <img
            src="https://www.infront.com/Sitefinity/WebsiteTemplates/2018/App_Themes/2018/Images/DesignElements/infront-logo.png"
            alt=""
            width="80%"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars text-light" />
        </button>
        <div
          className="collapse navbar-collapse navItems"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {/* FIRST DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle gold-hover"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DIGITAL MARKETING
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <a className="dropdown-item">
                  <Link
                    to="/digitalMarketing"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Digital Marketing
                  </Link>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  SEO
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  SEM
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  SOCIAL MEDIA
                </a>
              </div>
            </li>
            {/* SECOND DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle gold-hover gold-hover"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                WEBSITES
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <a className="dropdown-item" href="#">
                  WEB DESIGNING
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  DEVELOPMENT
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  ECOMMERCE
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  CLOUD SERVICE
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  MOBILE SITES
                </a>
              </div>
            </li>
            {/* THIRD DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle gold-hover"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ABOUT
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                <a className="dropdown-item" href="#">
                  THE TEAM
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  COMPANY
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  JOBS
                </a>
              </div>
            </li>
            {/* FOURTH DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle gold-hover"
                href="#"
                id="navbarDropdown4"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                WORK
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                <a className="dropdown-item" href="#">
                  PORTFOLIO
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  CASE STUDIES
                </a>
              </div>
            </li>
            {/* NAV ITEM */}
            <li className="nav-item dropdown">
              <a className="nav-link gold-hover" href="#" role="button">
                BLOG
              </a>
            </li>
            {/* SIXTH DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle gold-hover"
                href="#"
                id="navbarDropdown6"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                CONTACT
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown6">
                <a className="dropdown-item" href="#">
                  SUPPORT
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
