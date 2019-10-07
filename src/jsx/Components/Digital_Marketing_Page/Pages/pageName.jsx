import React, { Component } from "react";
import { Link } from "react-router-dom";
class PagesName extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="pagesName">
          <div className="name">
            <Link to="/" style={{ color: "grey" }} className="link1">
              {this.props.one}
            </Link>
            <span></span>
            <Link style={{ color: "#005cb9" }} className="link1">
              {this.props.two}
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
