import React, { Component } from "react";
class PagesName extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="pagesName">
          <div className="name">
            <p style={{ color: "grey" }}>Home</p>
            <span></span>
            <p style={{ color: "#005cb9" }}>Digital Marketing</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PagesName;
