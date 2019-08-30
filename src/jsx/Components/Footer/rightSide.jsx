import React from "react";
import Left from "./Components/Right_Side_Components/left";
import Center from "./Components/Right_Side_Components/center";
import Right from "./Components/Right_Side_Components/right";
import Bootom from "./Components/Right_Side_Components/bottom";
const RightSide = () => {
  return (
    <React.Fragment>
      <div className="left-side right-side">
        <div className="pages-link">
          <Left />
          <Center />
          <Right />
        </div>
        <Bootom />
      </div>
    </React.Fragment>
  );
};

export default RightSide;
