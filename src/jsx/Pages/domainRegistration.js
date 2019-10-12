import React, { Component } from "react";
import NavBar from "../Components/Home_Page/NavBar/nav";
import PagesName from "../Components/Domain_Registration/Pages_Name/pages";
class DomainRegistration extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <PagesName />
      </React.Fragment>
    );
  }
}

export default DomainRegistration;
