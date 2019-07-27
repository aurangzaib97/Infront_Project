import React, { Component } from "react";
import Header from "./Components/Header/header";
import NavBar from "./Components/NavBar/nav";
import Intro from "./Components/Intoduction/introduction";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <Intro />
      </React.Fragment>
    );
  }
}
export default App;
