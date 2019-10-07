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
            <Link style={{ color: "grey" }} className="link1 link2">
              Digital Marketing
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
