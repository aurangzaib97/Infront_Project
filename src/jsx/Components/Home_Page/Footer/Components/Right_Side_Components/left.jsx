import React from "react";
import { Link } from "react-router-dom";
const Left = () => {
  return (
    <React.Fragment>
      <div className="page-link page-responsive">
        <Link to="/websites" className="page-font gold-hover font-italic">
          WEB
        </Link>
        <Link to="/web-design" className="page-font gold-hover">
          Web Design
        </Link>
        <Link to="" className="page-font gold-hover">
          Development
        </Link>
        <Link to="" className="page-font gold-hover">
          Ecommerce
        </Link>
        <Link to="" className="page-font gold-hover">
          Cloud Services
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Left;
