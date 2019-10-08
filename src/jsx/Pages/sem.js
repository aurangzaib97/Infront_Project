import React, { Component } from "react";
import Nav from "../Components/Home_Page/NavBar/nav";
import MainContent from "../Components/SEM/Main_Content/main";
import Clients from "../Components/Home_Page/Clients/clients";
import Footer from "../Components/Home_Page/Footer/footer";
import Copyright from "../Components/Home_Page/Copyright/copyright";
class SEM extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav />
        <MainContent />
        <Clients />
        <Footer />
        <Copyright />
      </React.Fragment>
    );
  }
}

export default SEM;
