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
              to="/about"
              style={{ color: "#005cb9", whiteSpace: "nowrap" }}
              className="socialLink1"
            >
              About
            </Link>
            <Link
              to="/the-team"
              style={{ color: "grey" }}
              className="socialLink1 link2"
            >
              The Team
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
