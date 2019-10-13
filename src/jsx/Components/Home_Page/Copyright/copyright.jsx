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
          <Link to="/terms-of-services" className="gold-hover">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="gold-hover">
            Privacy Policy
          </Link>
          <Link to="/jobs" className="gold-hover">
            Jobs
          </Link>
          <Link to="/company" className="gold-hover">
            Company
          </Link>
          <Link to="/the-team" className="gold-hover">
            The Team
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Copyright;
