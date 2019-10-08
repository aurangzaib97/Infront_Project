import React from "react";
const LeftSide = () => {
  const ind = 1;
  return (
    <React.Fragment>
      <div className="left-side">
        <div className="address">
          <h5 className="footer-left-heading gold-hover font-italic font-weight-bold text-light">
            Infront Webworks
          </h5>
          <pre className="address-para text-light">
            5350 Tomah Dr #2800 <br />
            Colorado Springs, CO
            <br />
            80918
          </pre>
        </div>
        <div className="map-div">
          <div className="map">
            <iframe
              title={ind}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24837.744207783435!2d-104.779718!3d38.907563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2fc0604f197d888!2sInfront%20Webworks!5e0!3m2!1sen!2sus!4v1566628031849!5m2!1sen!2sus"
            />
          </div>
        </div>
        <div className="social-icons">
          <h5 className="footer-left-heading font-italic font-weight-bold text-light">
            Follow Us
          </h5>
          <div className="icons">
            <div className="icon">
              <i className="fab fa-facebook-f" />
            </div>
            <div className="icon">
              <i className="fab fa-linkedin-in" />
            </div>
            <div className="icon">
              <i className="fab fa-twitter" />
            </div>
            <div className="icon">
              <i className="fab fa-youtube" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftSide;
