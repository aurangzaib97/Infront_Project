import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/home";
import DigitalMarketing from "./Pages/digitalMarketing";
import SEO from "./Pages/seo";
import SEM from "./Pages/sem";
import SocialMedia from "./Pages/socialMedia";
import Web from "./Pages/web";
import WebDesign from "./Pages/webDesign";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/digitalMarketing" component={DigitalMarketing} />
        <Route path="/seo" component={SEO} />
        <Route path="/sem" component={SEM} />
        <Route path="/social-media" component={SocialMedia} />
        <Route path="/websites" component={Web} />
        <Route path="/web-design" component={WebDesign} />
      </React.Fragment>
    );
  }
}
export default App;
