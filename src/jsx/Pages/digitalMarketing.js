import React, { Component } from "react";
import Navbar from "../Components/Home_Page/NavBar/nav";
import Pages from "../Components/Digital_Marketing_Page/Pages/pages";
import MainContent from "../Components/Digital_Marketing_Page/Main_Content/main";
class DigitalMarketing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Pages />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default DigitalMarketing;
