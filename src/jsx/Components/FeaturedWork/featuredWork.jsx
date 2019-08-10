import React, { Component, Fragment } from "react";
class FeaturedWork extends Component {
  render() {
    return (
      <Fragment>
        <div className="featuredWork">
          <div className="text">
            <h1 className="font-weight-bold text-heading">FEATURED WORK</h1>
            <p>
              Curious to find out what it takes to generate high quality leads
              to your business? Take a look at our case studies for digital
              strategies, using examples from our latest clients. We share how
              web design, development and optimization resulted in exceptionally
              high conversion rates.
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
          <div className="img">
            <div>
              <img
                src="https://www.infront.com/images/default-source/case-studies/delimmune-homepage-case-study-300x200.png?Status=Temp&sfvrsn=b31614d7_4"
                alt="img-1"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src="https://www.infront.com/images/default-source/featured-sites/ge-johnson300.png"
                alt="img-2"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src="https://www.infront.com/images/default-source/case-studies/garden-of-gods-home-page-case-study-landy-300x200.png?Status=Temp&sfvrsn=fc4aa734_2"
                alt="img-3"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src="https://www.infront.com/images/default-source/2018-assets/featured-sites/st-patricks300.png"
                alt="img-4"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src="https://www.infront.com/images/default-source/2018-assets/featured-sites/transtech300.png"
                alt="img-5"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <img
                src="https://www.infront.com/images/default-source/featured-sites/y-300.png"
                alt="img-6"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FeaturedWork;
