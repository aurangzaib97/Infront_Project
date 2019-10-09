import React, { Component } from "react";
import Aside from "./aside";
import PagesName from "./pageName";
class Pages extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="pages-div2">
            <PagesName />
            <Aside />
          </div>
          <div className="responsive-aside">
            <p className="aside-heading head">
              Request a Quote <span>(719) 577-4404</span>
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Pages;
