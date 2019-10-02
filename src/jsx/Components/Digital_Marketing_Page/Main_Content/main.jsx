import React, { Component } from "react";
import Content from "./content";
class Main_Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main>
          <div className="mainContent">
            <Content />
            <div className="asideContent"></div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Main_Content;
