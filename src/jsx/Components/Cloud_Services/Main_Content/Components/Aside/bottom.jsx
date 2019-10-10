import React, { Component } from "react";
class Bottom extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="bottom1">
          <div className="bottom1Image">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-nawc.jpg?sfvrsn=75ef1e0f_0"
              alt=""
              width="100%"
            />
          </div>
          <div className="bottom1Image">
            <div className="bottomText">
              <h4>
                <b>
                  <i>Need Web Hosting or Email?</i>
                </b>
              </h4>
              <p className="bottomPara2">Our team of experts can help!</p>
              <p className="bottomPara3">
                We've been hosting web sites and providing email services for
                our clients for decades now. Don't risk these critical business
                functions to amateurs, turn toward the professionals that know
                how to do it because we have done it.
              </p>
              <button className="btn btn-primary text-uppercase">
                Get A Free Quote
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Bottom;
