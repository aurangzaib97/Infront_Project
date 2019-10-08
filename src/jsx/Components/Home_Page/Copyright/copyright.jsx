import React from "react";
import { Link } from "react-router-dom";
const Copyright = () => {
  return (
    <React.Fragment>
      <div className="copyright">
        <div className="copy">
          <p>&copy;&nbsp;2019 Infront Webworks</p>
        </div>
        <div className="other-links">
          <Link to="" className="gold-hover">
            Terms of Service
          </Link>
          <Link to="" className="gold-hover">
            Privacy Policy
          </Link>
          <Link to="" className="gold-hover">
            Jobs
          </Link>
          <Link to="" className="gold-hover">
            Company
          </Link>
          <Link to="" className="gold-hover">
            The Team
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Copyright;
