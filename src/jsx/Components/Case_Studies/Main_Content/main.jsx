import React, { Component } from "react";
import CROSSDEPARTMENTALDIGITALCASESTUDIES from "./Components/Main/crossDepartmentDigitalCaseStudies";
import SEOANDDIGITALMARKETINGCASESTUDIES from "./Components/Main/seoAndDigitalMarketingCaseStudies";
import WEBSITEDEVELOPMENTANDWEBDESIGNCASESTUDIES from "./Components/Main/websiteDEVELOPMEAndWebDesignCaseStudies";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main0">
          {/* Sites Section */}
          <div className="main2Sites">
            <CROSSDEPARTMENTALDIGITALCASESTUDIES />
            {/* line */}
            <hr className="text-muted" />
            <SEOANDDIGITALMARKETINGCASESTUDIES />
            {/* line */}
            <hr className="text-muted" />
            <WEBSITEDEVELOPMENTANDWEBDESIGNCASESTUDIES />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
