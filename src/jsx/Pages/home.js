import React, { Component } from "react";
import Header from "../Components/Home_Page/Header/header";
import NavBar from "../Components/Home_Page/NavBar/nav";
import Intro from "../Components/Home_Page/Intoduction/introduction";
import AboutCompany from "../Components/Home_Page/About/about";
import Services from "../Components/Home_Page/Services/services";
import FeaturedWork from "../Components/Home_Page/FeaturedWork/featuredWork";
import Blog from "../Components/Home_Page/Blog/blog";
import Clients from "../Components/Home_Page/Clients/clients";
import Footer from "../Components/Home_Page/Footer/footer";
import Copyright from "../Components/Home_Page/Copyright/copyright";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <Intro />
        <AboutCompany />
        <Services />
        <FeaturedWork />
        <Blog />
        <Clients />
        <Footer />
        <Copyright />
      </React.Fragment>
    );
  }
}
export default App;
