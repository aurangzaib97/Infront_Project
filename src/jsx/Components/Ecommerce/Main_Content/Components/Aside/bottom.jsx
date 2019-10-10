import React, { Component } from "react";
class Bottom extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="bottom1">
          <div className="bottom1Image">
            <img
              src="https://www.infront.com/images/default-source/web-design/portfolio-images/responsive-design-delimmune.jpg?sfvrsn=2a1ac007_2"
              alt=""
              width="100%"
            />
          </div>
          <div className="bottom1Image">
            <div className="bottomText">
              <h4 style={{ width: "90%" }}>
                <b>
                  <i>Need eCommerce Work?</i>
                </b>
              </h4>
              <p className="bottomPara2">Our team of experts can help!</p>
              <p className="bottomPara3">
                Whether you are new to eCommerce or already have an online store
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
        <div className="centerText">
          <p className="asideHead font-weight-bold">eCommerce Platforms</p>
          <img
            src="https://www.infront.com/images/default-source/web-design/ecommerce6bbf175ed0b245ea9ab82c9781c4d70f.png?sfvrsn=252e552c_0"
            alt=""
            width="100%"
          />
          <p className="asideHead font-weight-bold">API Integrations</p>
          <img
            src="https://www.infront.com/images/default-source/web-design/api82cd5b08017d4d7c8e0b977e5b485ae7.png?sfvrsn=84caaeb2_0"
            alt=""
            width="100%"
          />
          <p className="asideHead font-weight-bold">Programming Languages</p>
          <img
            src="https://www.infront.com/images/default-source/web-design/languages.png?sfvrsn=710de127_0"
            alt=""
            width="100%"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Bottom;
