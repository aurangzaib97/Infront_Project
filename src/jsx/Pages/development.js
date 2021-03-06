import React, { Component } from "react";
import NavBar from "../Components/Home_Page/NavBar/nav";
import MainContent from "../Components/Development/Main_Content/main";
import PagesName from "../Components/Development/Pages_Name/pages";
import Clients from "../Components/Home_Page/Clients/clients";
import Footer from "../Components/Home_Page/Footer/footer";
import Copyright from "../Components/Home_Page/Copyright/copyright";
class Development extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <PagesName />
        <MainContent />
        <Clients />
        <Footer />
        <Copyright />
      </React.Fragment>
    );
  }
}

export default Development;
