import React from "react";
import ClipPath from "./clipPath";
import Heading from "./heading";
const Header = () => {
  return (
    <React.Fragment>
      <div className="bg-img">
        <Heading />
        <ClipPath />
      </div>
    </React.Fragment>
  );
};
export default Header;
