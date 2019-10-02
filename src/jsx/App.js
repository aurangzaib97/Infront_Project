import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/home";
import DigitalMarketing from "./Pages/digitalMarketing";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route to="/" exact component={Home} />
        <DigitalMarketing />
      </React.Fragment>
    );
  }
}
export default App;
