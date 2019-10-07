import React, { Component } from "react";
import Navbar from "../Components/Home_Page/NavBar/nav";
import Pages from "../Components/Digital_Marketing_Page/Pages_Name/pages";
import MainContent from "../Components/Digital_Marketing_Page/Main_Content/main";
import Clients from "../Components/Home_Page/Clients/clients";
import Footer from "../Components/Home_Page/Footer/footer";
import Copyright from "../Components/Home_Page/Copyright/copyright";
class DigitalMarketing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Pages />
        <MainContent />
        <Clients />
        <Footer />
        <Copyright />
      </React.Fragment>
    );
  }
}

export default DigitalMarketing;
