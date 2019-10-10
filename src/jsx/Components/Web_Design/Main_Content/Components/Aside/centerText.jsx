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
          <p className="asideHead">API INTEGRATION</p>
          <div className="imageGoogle">
            <img
              src="https://www.infront.com/images/default-source/web-design/api82cd5b08017d4d7c8e0b977e5b485ae7.png?sfvrsn=84caaeb2_0"
              alt=""
              width="100%"
            />
          </div>
          <p className="asideHead">PROGRAMMING LANGUAGES</p>
          <div className="imageGoogle">
            <img
              src="https://www.infront.com/images/default-source/web-design/languagescb3b52c0913d42b996b2e4c7b7e5bb02.png?sfvrsn=53649084_0"
              alt=""
              width="100%"
            />
          </div>
          <div className="text">
            <p>
              <b>
                "I have worked with Andrea and the entire team at Infront for
                many years. They are a very efficient and organized bunch who
                know exactly what they are doing, and always put their clients
                first. I would recommend Infront in the future."
              </b>
              <br />
              C. LeRoy (Willis Allen Real Estate)
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CenterText;
