import React from "react";
const clipPath = () => {
  return (
    <React.Fragment>
      <div className="clip-path">
        <div className="clip-content">
          <h1>
            Need a website <br /> or SEO help?
          </h1>
        </div>
        <div className="clip-contact">
          <div className="text">
            <i className="fas fa-envelope" />
            <a href="" className="btn-link btn">
              Request a Quote
            </a>
          </div>
        </div>
        <div className="no">
          <p>(719) 577-4404</p>
        </div>
      </div>
      <div className="clip-path-shadow" />
    </React.Fragment>
  );
};

export default clipPath;
