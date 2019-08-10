import React, { Component } from "react";
import Header from "./Components/Header/header";
import NavBar from "./Components/NavBar/nav";
import Intro from "./Components/Intoduction/introduction";
import AboutCompany from "./Components/About/about";
import Services from "./Components/Services/services";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <Intro />
        <AboutCompany />
        <Services />
      </React.Fragment>
    );
  }
}
export default App;
