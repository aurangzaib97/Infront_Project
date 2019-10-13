import React, { Component } from "react";
import SitefinitySites from "./Components/Main/sitefinitySites";
import EcommerceSite from "./Components/Main/ecommerceSite";
import NetOrchardSites from "./Components/Main/net_orchardSites";
import WordpressSites from "./Components/Main/wordpressSites";
import BigCommerceSites from "./Components/Main/bigCommerceSites";
import SmallBussinessSites from "./Components/Main/smallBussinessSites";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main2">
          <h1 className="main2Heading">INFRONT WEBWORKS PORTFOLIO</h1>
          <p className="main2Para">
            Below you can find a small sample of the kind of quality of work you
            can expect from our team of experts. Reach out to us today and see
            what Infront can do for YOU!
          </p>
          {/* Sites Section */}
          <div className="main2Sites">
            <SitefinitySites />
            {/* line */}
            <hr className="text-muted" />
            <EcommerceSite />
            {/* line */}
            <hr className="text-muted" />
            <NetOrchardSites />
            {/* line */}
            <hr className="text-muted" />
            <WordpressSites />
            {/* line */}
            <hr className="text-muted" />
            <BigCommerceSites />
            {/* line */}
            <hr className="text-muted" />
            <SmallBussinessSites />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
