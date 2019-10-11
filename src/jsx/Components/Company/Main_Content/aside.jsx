import React, { Component } from "react";
import Form from "./Components/Aside/form";
import CenterText from "./Components/Aside/centerText";
class Aside extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="asideContent">
          <Form />
          <CenterText />
        </div>
      </React.Fragment>
    );
  }
}

export default Aside;
