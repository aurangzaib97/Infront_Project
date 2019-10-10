import React, { Component } from "react";
class CenterText extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="centerText">
          <div className="imageGoogle">
            <img
              src="https://www.infront.com/images/default-source/awards/google-reviews.jpg"
              alt=""
              width="100%"
            />
          </div>
          <div className="text">
            <p>
              <b>
                "Infront Webworks has been great to work with, and the results
                are undeniable. They have updated my website for me, and have
                been handling my SEO, and business has increased as a direct
                result. Their staff has treated me very professionally, and keep
                me updated every step of the way."
              </b>
              <br />
              Q. White (Fidelity Mortgage Solutions)
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CenterText;
