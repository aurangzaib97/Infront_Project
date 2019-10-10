import React, { Component } from "react";
class Bottom extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="bottom1">
          <div className="bottom1Image">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-pueblo-ymca.jpg?sfvrsn=85fbd795_2"
              alt=""
              width="100%"
            />
          </div>
          <div className="bottom1Image">
            <div className="bottomText">
              <h4>
                <b>
                  <i>Free SEO Audit</i>
                </b>
              </h4>
              <p className="bottomPara2">Why aren't you #1 in search</p>
              <p className="bottomPara3">
                We'll provide you with a free, no-obligation report that will
                give you powerful insight into how your website stacks up
                against the competition and ranks in the Search Engines.
              </p>
              <button className="btn btn-primary text-uppercase">
                Get Your Seo Audit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Bottom;
