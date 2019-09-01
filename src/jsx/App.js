import React, { Component } from "react";
import Header from "./Components/Header/header";
import NavBar from "./Components/NavBar/nav";
import Intro from "./Components/Intoduction/introduction";
import AboutCompany from "./Components/About/about";
import Services from "./Components/Services/services";
import FeaturedWork from "./Components/FeaturedWork/featuredWork";
import Blog from "./Components/Blog/blog";
import Clients from "./Components/Clients/clients";
import Footer from "./Components/Footer/footer";
import Copyright from "./Components/Copyright/copyright";
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
