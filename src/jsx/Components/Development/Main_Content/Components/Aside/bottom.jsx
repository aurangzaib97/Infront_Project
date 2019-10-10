import React, { Component } from "react";
class Bottom extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="bottom1">
          <div className="bottom1Image">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-cp.jpg?sfvrsn=b66d629b_2"
              alt=""
              width="100%"
            />
          </div>
          <div className="bottom1Image">
            <div className="bottomText">
              <h4>
                <b>
                  <i>Need Web Work?</i>
                </b>
              </h4>
              <p className="bottomPara2">Our team of experts can help!</p>
              <p className="bottomPara3">
                Whether you need a simple integration with Constant Contact or a
                complex eCommerce reporting solution not only can we do it, we
                probably already have. Leverage our years of experience!
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
