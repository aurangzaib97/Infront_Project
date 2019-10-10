import React, { Component } from "react";
import { Link } from "react-router-dom";
class PagesName extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="pagesName">
          <div className="name3">
            <Link to="/" style={{ color: "#005cb9" }} className="seoLink1">
              Home
            </Link>
            <Link to="/seo" style={{ color: "#005cb9" }} className="seoLink1">
              SEO
            </Link>
            <Link
              to="/sem"
              style={{ color: "grey" }}
              className="seoLink1 link2"
            >
              SEM
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
