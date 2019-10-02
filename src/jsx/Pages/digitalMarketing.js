import React, { Component } from "react";
import Navbar from "../Components/Home_Page/NavBar/nav";
import Pages from "../Components/Digital_Marketing_Page/Pages/pages";
class DigitalMarketing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Pages />
      </React.Fragment>
    );
  }
}

export default DigitalMarketing;
