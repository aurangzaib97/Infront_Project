import React, { Component } from "react";
import { Link } from "react-router-dom";
class PagesName extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="pagesName">
          <div className="name5">
            <Link to="/" style={{ color: "#005cb9" }} className="webLink1">
              Home
            </Link>
            <Link
              to="/about"
              style={{ color: "grey" }}
              className="webLink1 link2"
            >
              About
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
