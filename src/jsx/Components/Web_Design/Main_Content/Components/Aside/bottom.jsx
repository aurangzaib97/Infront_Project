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
                  <i>Need Web Work?</i>
                </b>
              </h4>
              <p className="bottomPara2">Our team of experts can help!</p>
              <p className="bottomPara3">
                Whether you need a web site or have one that needs a redesign,
                we are the right choice. All of our processes, experience and
                skills combine to deliver a visually compelling, functionality
                rich experience for your customers.
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
