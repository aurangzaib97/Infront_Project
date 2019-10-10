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
                "Infront has been critical in our online presence. Our company
                provides continuing medical education through our online courses
                and Infront ensures our users have a fluid experience to meet
                their continuing education needs. They filled a much needed void
                in our IT back-end infrastructure and assumed responsibility for
                code they did not author. Infront conducted a discovery audit of
                our system and solved our immediate needs as well as provided
                for long term strategies in helping us grow. I strongly
                recommend an in depth dialogue if there is a need for
                outsourcing web development in your company."
              </b>
              <br />
              Beni Vega (Pfiedler Enterprises)
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CenterText;
