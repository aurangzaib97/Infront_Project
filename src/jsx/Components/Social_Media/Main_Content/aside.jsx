import React, { Component } from "react";
import Form from "./Components/Aside/form";
import Bottom from "./Components/Aside/bottom";
class Aside extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="asideContent asideContent3">
          <Form />
          <Bottom />
        </div>
      </React.Fragment>
    );
  }
}

export default Aside;
