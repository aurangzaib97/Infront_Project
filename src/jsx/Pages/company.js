import React, { Component } from "react";
import NavBar from "../Components/Home_Page/NavBar/nav";
import PagesName from "../Components/Company/Pages_Name/pages";
import MainContent from "../Components/Company/Main_Content/main";
import Clients from "../Components/Home_Page/Clients/clients";
import Footer from "../Components/Home_Page/Footer/footer";
import Copyright from "../Components/Home_Page/Copyright/copyright";
class Company extends Component {
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

export default Company;
