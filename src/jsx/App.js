import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/home";
import DigitalMarketing from "./Pages/digitalMarketing";
import SEO from "./Pages/seo";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/digitalMarketing" component={DigitalMarketing} />
        <Route path="/seo" component={SEO} />
      </React.Fragment>
    );
  }
}
export default App;
