import React, { Component } from "react";
import Content from "./content";
import Aside from "./aside";
class Main_Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main>
          <div className="mainContent">
            <Content />
            <Aside />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Main_Content;
