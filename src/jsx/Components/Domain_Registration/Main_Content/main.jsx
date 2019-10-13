import React, { Component } from "react";
import Content from "./content";
import Aside from "./aside";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main3">
          <Content />
          <Aside />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
