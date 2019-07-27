import React, { Fragment } from "react";
import ConversationForm from "./coversationForm";
import Description from "./description";
const Intro = () => {
  return (
    <Fragment>
      <div className="introduction">
        <Description />
        <ConversationForm />
      </div>
    </Fragment>
  );
};

export default Intro;
