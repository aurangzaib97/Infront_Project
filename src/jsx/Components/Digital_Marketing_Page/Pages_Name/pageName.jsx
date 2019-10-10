import React, { Component } from "react";
import { Link } from "react-router-dom";
class PagesName extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="pagesName">
          <div className="name">
            <Link to="/" style={{ color: "#005cb9" }} className="link1">
              Home
            </Link>
            <span></span>
            <Link to="/seo" style={{ color: "#005cb9" }} className="link1">
              SEO
            </Link>
            <Link to="/sem" style={{ color: "#005cb9" }} className="link1">
              SEM
            </Link>
            <Link
              to="/social-media"
              style={{ color: "#005cb9" }}
              className="link1 link3"
            >
              Social Media
            </Link>
            <Link
              to="/digitalMarketing"
              style={{ color: "grey" }}
              className="link1 link2"
            >
              Digital Marketing
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
