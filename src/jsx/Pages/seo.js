import React, { Component } from "react";
import Navbar from "../Components/Home_Page/NavBar/nav";
import Main from "../Components/SEO/Main_Content/main";
import PagesName from "../Components/SEO/Pages_Name/pages";
import Clients from "../Components/Home_Page/Clients/clients";
import Footer from "../Components/Home_Page/Footer/footer";
import Copyright from "../Components/Home_Page/Copyright/copyright";
class SEO extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PagesName />
        <Main />
        <Clients />
        <Footer />
        <Copyright />
      </React.Fragment>
    );
  }
}

export default SEO;
