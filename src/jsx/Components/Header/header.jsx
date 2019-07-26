import React from "react";
import Clip_Path from "./clipPath";
import Heading from "./heading";
const Header = () => {
  return (
    <React.Fragment>
      <div className="bg-img">
        <Heading />
        <Clip_Path />
      </div>
    </React.Fragment>
  );
};
export default Header;
