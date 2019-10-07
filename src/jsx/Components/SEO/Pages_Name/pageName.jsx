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
            <Link
              to="/digitalMarketing"
              style={{ color: "#005cb9", whiteSpace: "nowrap" }}
              className="link1"
            >
              Digital Marketing
            </Link>
            <Link style={{ color: "grey" }} className="link1 link2">
              SEO
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
