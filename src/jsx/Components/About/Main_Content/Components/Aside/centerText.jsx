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
        </div>
      </React.Fragment>
    );
  }
}

export default CenterText;
