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
                "Infront Webworks is a professional company that does what they
                say they will do. In today's business climate there is a lot of
                over-promising and under-delivering so I could stop with the
                first sentence of this review and it would be adequate, but I
                will add to it because of the exceptional services this company
                delivers. Infront is the second largest company of it's type in
                our city. I spent a lot of time vetting the larger company and
                felt Infront was a better fit. I have never looked back! Infront
                has a remarkable customer retention rate, and from a customer's
                view, I can understand why. They go "above and beyond" in
                helping their clients be more successful. I can wholeheartedly
                recommend this company."
              </b>
              <br />
              G. Kelley (400 Hugs)
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CenterText;
