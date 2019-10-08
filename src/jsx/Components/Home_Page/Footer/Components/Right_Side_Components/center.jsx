import React from "react";
import { Link } from "react-router-dom";
const Center = () => {
  return (
    <React.Fragment>
      <div className="page-link page-responsive">
        <Link
          to="/digitalMarketing"
          className="page-font gold-hover font-italic"
        >
          DIGITAL MARKETING
        </Link>
        <Link to="/seo" className="page-font gold-hover">
          SEO
        </Link>
        <Link to="" className="page-font gold-hover">
          SEM
        </Link>
        <Link to="" className="page-font gold-hover">
          Social Media
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Center;
