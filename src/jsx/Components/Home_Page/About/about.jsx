import React, { Component } from "react";
class AboutCompany extends Component {
  render() {
    let img =
      "https://www.infront.com/images/default-source/2018-assets/marketing.jpg?sfvrsn=e1d5123d_16";
    return (
      <React.Fragment>
        <div className="about d-flex align-items-center">
          <div className="pic">
            <img src={img} alt="" width="100%" height="100%" />
          </div>
          <div className="tipsAndTricks">
            <div className="topAside">
              <i class="fas fa-question" />
            </div>
            <h4 className="font-weight-bold font-italic tipsHeading">
              The Infront Blog
            </h4>
            <h6 className="font-italic tipsSubHeading">
              Website Tips & Tricks
            </h6>
            <p className="tipsPara">
              Tips to improve your website, user experience, conversion rate,
              website search ranking, develop quality content and keep you up to
              date on the latest in internet compliance, trends and Infront
              News.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
          <div className="awardWinning">
            <div className="topAside">
              <i class="fas fa-scroll" />
            </div>
            <h4 className="font-weight-bold font-italic tipsHeading">
              Top Search Rank
            </h4>
            <h6 className="font-italic tipsSubHeading">Award Winning SEO</h6>
            <p className="tipsPara">
              SEO programs engineered to deliver results month after month by a
              nationally recognized team of Search Engine Optimization (SEO) &
              Search Engine Marketing (SEM) experts.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutCompany;
