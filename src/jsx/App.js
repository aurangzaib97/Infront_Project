import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/home";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route to="/" exact component={Home} />
      </React.Fragment>
    );
  }
}
export default App;
