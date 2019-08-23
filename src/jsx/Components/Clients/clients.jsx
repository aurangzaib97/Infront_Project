import React, { Component, Fragment } from "react";
class Clients extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="clients">
          <img
            src="https://www.infront.com/images/default-source/blog/landy_award_2018.png?sfvrsn=ee30b3fc_0"
            alt="client 1"
            width="150px"
            className="clientImg"
          />
          <img
            src="https://www.infront.com/images/default-source/blog/google_bbb_sq.png?sfvrsn=7d8ad3ee_0"
            alt="client 2"
            width="150px"
            className="clientImg"
          />
          <img
            src="https://www.infront.com/images/default-source/awards/lsa-color.png?sfvrsn=c8602385_10"
            alt="client 3"
            width="150px"
            className="clientImg"
          />
          <img
            src="https://www.infront.com/images/default-source/awards/bestbusiness-color.png?sfvrsn=a1c348e2_10"
            alt="client 4"
            width="150px"
            className="clientImg"
          />
          <img
            src="https://www.infront.com/images/default-source/blog/top_b2b_companies_global_2018_1x1.png?sfvrsn=ac0103e4_4"
            alt="client 5"
            width="150px"
            className="clientImg"
          />
          <div className="clientImg">
            <img
              src="https://www.infront.com/images/default-source/blog/best-seo-company-transparent_sm.png?sfvrsn=ba379e9c_0"
              alt="client 6"
              width="150px"
            />
            <img
              src="https://www.infront.com/images/default-source/blog/us_search_awards_2018f0cde23448224fdbaeb7fb61e85e7131.png?sfvrsn=13729380_0"
              alt="client 7"
              width="150px"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Clients;
