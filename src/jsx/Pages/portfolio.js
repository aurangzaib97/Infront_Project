import React, { Component } from "react";
import NavBar from "../Components/Home_Page/NavBar/nav";
import PagesName from "../Components/Portfolio/Pages_Name/pages";
import MainContent from "../Components/Portfolio/Main_Content/main";
import Clients from "../Components/Home_Page/Clients/clients";
import Footer from "../Components/Home_Page/Footer/footer";
import Copyright from "../Components/Home_Page/Copyright/copyright";
class Portfolio extends Component {
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

export default Portfolio;
