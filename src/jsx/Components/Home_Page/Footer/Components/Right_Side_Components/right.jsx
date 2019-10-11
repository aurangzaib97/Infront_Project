import React from "react";
import { Link } from "react-router-dom";
const Right = () => {
  return (
    <React.Fragment>
      <div className="page-link page-responsive2">
        <Link to="/cloud-services" className="page-font gold-hover font-italic">
          CLOUD SERVICES
        </Link>
        <Link to="" className="page-font gold-hover">
          Domain Registration
        </Link>
        <Link to="" className="page-font gold-hover">
          Email Services
        </Link>
        <Link to="" className="page-font gold-hover">
          Web Hosting
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Right;
