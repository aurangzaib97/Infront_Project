import React, { Component } from "react";
import Nav from "../Components/Home_Page/NavBar/nav";
import MainContent from "../Components/SEM/new/Main_Content/main";
import PagesName from "../Components/SEM/Pages_Name/pages";
import Clients from "../Components/Home_Page/Clients/clients";
import Footer from "../Components/Home_Page/Footer/footer";
import Copyright from "../Components/Home_Page/Copyright/copyright";
class SEM extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav />
        <PagesName />
        <MainContent />
        <Clients />
        <Footer />
        <Copyright />
      </React.Fragment>
    );
  }
}

export default SEM;
