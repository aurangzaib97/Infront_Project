import React from "react";
import ReactDOM from "react-dom";
import App from "./jsx/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
