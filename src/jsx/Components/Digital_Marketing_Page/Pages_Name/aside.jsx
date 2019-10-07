import React, { Component } from "react";
class Aside extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <aside>
          <div className="aside-black"></div>
          <div className="aside">
            <p className="aside-heading">
              Request a Quote <span>(719) 577-4404</span>
            </p>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default Aside;
