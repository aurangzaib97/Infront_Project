import React, { Component } from "react";
import CenterText from "./Components/Aside/centerText";
import Bottom from "./Components/Aside/bottom";
class Aside extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="asideContent">
          <CenterText />
          <Bottom />
        </div>
      </React.Fragment>
    );
  }
}

export default Aside;
