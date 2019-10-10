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
              <Link
                to=""
                className="nav-link dropdown-toggle gold-hover"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DIGITAL MARKETING
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <Link
                  to="/seo"
                  style={{ color: "black", textDecoration: "none" }}
                  className="dropdown-item"
                >
                  SEO
                </Link>
                <div className="dropdown-divider" />

                <Link to="/sem" className="dropdown-item">
                  SEM
                </Link>
                <div className="dropdown-divider" />
                <Link to="/social-media" className="dropdown-item">
                  SOCIAL MEDIA
                </Link>
                <div className="dropdown-divider" />
                <Link
                  to="/digitalMarketing"
                  style={{
                    textDecoration: "none",
                    fontWeight: "normal",
                    fontSize: "100",
                    color: "#212529"
                  }}
                  className="dropdown-item"
                >
                  Digital Marketing
                </Link>
              </div>
            </li>
            {/* SECOND DROPDOWN */}
            <li className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle gold-hover gold-hover"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                WEBSITES
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <Link to="/websites" className="dropdown-item">
                  WEB
                </Link>
                <div className="dropdown-divider" />
                <Link to="/web-design" className="dropdown-item">
                  WEB DESIGNING
                </Link>
                <div className="dropdown-divider" />
                <Link to="/development" className="dropdown-item">
                  DEVELOPMENT
                </Link>
                <div className="dropdown-divider" />
                <Link to="/ecommerce" className="dropdown-item">
                  ECOMMERCE
                </Link>
                <div className="dropdown-divider" />
                <Link to="/cloud-services" className="dropdown-item">
                  CLOUD SERVICE
                </Link>
                <div className="dropdown-divider" />
                <Link to="/mobile-sites" className="dropdown-item">
                  MOBILE SITES
                </Link>
              </div>
            </li>
            {/* THIRD DROPDOWN */}
            <li className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle gold-hover"
                id="navbarDropdown3"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ABOUT
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                <Link to="/about" className="dropdown-item">
                  About Us
                </Link>
                <div className="dropdown-divider" />
                <Link to="" className="dropdown-item">
                  THE TEAM
                </Link>
                <div className="dropdown-divider" />
                <Link to="" className="dropdown-item">
                  COMPANY
                </Link>
                <div className="dropdown-divider" />
                <Link to="" className="dropdown-item">
                  JOBS
                </Link>
              </div>
            </li>
            {/* FOURTH DROPDOWN */}
            <li className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle gold-hover"
                id="navbarDropdown4"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                WORK
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                <Link to="" className="dropdown-item">
                  PORTFOLIO
                </Link>
                <div className="dropdown-divider" />
                <Link to="" className="dropdown-item">
                  CASE STUDIES
                </Link>
              </div>
            </li>
            {/* NAV ITEM */}
            <li className="nav-item dropdown">
              <Link to="" className="nav-link gold-hover" role="button">
                BLOG
              </Link>
            </li>
            {/* SIXTH DROPDOWN */}
            <li className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle gold-hover"
                id="navbarDropdown6"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                CONTACT
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown6">
                <Link to="" className="dropdown-item">
                  SUPPORT
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
