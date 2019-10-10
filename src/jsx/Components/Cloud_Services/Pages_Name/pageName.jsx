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
              to="/websites"
              style={{ color: "#005cb9", whiteSpace: "nowrap" }}
              className="socialLink1"
            >
              Websites
            </Link>
            <Link
              to="/cloud-services"
              style={{ color: "grey" }}
              className="socialLink1 link2"
            >
              Cloud Services
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
