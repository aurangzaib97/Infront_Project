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
        <a href="#" className="page-font gold-hover">
          SEO
        </a>
        <a href="#" className="page-font gold-hover">
          SEM
        </a>
        <a href="#" className="page-font gold-hover">
          Social Media
        </a>
      </div>
    </React.Fragment>
  );
};

export default Center;
