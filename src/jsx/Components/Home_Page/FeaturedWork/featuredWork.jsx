import React, { Component, Fragment } from "react";
import Content from "./content";
import Images from "./images";
class FeaturedWork extends Component {
  render() {
    return (
      <Fragment>
        <div className="featuredWork">
          <Content />
          <Images />
        </div>
      </Fragment>
    );
  }
}

export default FeaturedWork;
