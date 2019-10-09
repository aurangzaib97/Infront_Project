import React, { Component } from "react";
import { Link } from "react-router-dom";
class PagesName extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="pagesName">
          <div className="name4">
            <Link to="/" style={{ color: "#005cb9" }} className="socialLink1">
              Home
            </Link>
            <Link
              to="/seo"
              style={{ color: "#005cb9" }}
              className="socialLink1"
            >
              SEO
            </Link>
            <Link
              to="/seo"
              style={{ color: "#005cb9" }}
              className="socialLink1"
            >
              SEM
            </Link>
            <Link to="" style={{ color: "grey" }} className="socialLink1 link2">
              SOCIAL MEDIA
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
