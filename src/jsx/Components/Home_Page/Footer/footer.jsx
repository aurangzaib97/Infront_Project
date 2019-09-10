import React from "react";
import LeftSide from "./leftSide";
import Center from "./center";
import RightSide from "./rightSide";
const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="upper-footer">
          <LeftSide />
          <Center />
          <RightSide />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
