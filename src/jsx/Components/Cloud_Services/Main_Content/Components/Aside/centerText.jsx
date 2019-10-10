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
                "I have worked with Infront since 2006 and they have always had
                excellent customer service. David Copley is always on top of
                things and has helped us many times over the years. Highly
                recommend them."
              </b>
              <br />
              D. Gilbert (Pikes Peak United Way)
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CenterText;
