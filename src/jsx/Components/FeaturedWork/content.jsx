import React, { Component, Fragment } from "react";
class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className="text">
          <h1 className="font-weight-bold text-heading">FEATURED WORK</h1>
          <p>
            Curious to find out what it takes to generate high quality leads to
            your business? Take a look at our case studies for digital
            strategies, using examples from our latest clients. We share how web
            design, development and optimization resulted in exceptionally high
            conversion rates.
          </p>
          <div className="text-link">
            <a href="#" className="btn btn-link">
              Read Case Studies
            </a>
            <a href="#" className="btn btn-link">
              Get A Quote
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Content;
