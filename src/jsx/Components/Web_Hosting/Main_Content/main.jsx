import React, { Component } from "react";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main1">
          <h1 className="main1Heading">WEBSITE HOSTING</h1>
          <p className="main1Para">
            Because different types of sites have different needs, we offer both
            Linux and Windows hosting options:
          </p>
          <p className="main1Heading2 text-dark">WINDOWS HOSTING</p>
          <p className="main1Heading2">PACKAGE STARTS AT $29.95/MONTH</p>

          <p className="main1Para">
            Infront's Windows hosting services include e-mail services, web site
            service features, and additional service options.
          </p>
          <p className="main1Para">Features:</p>
          <ul className="main1Ul">
            <li>5 GB Web server disk storage</li>
            <li>250 MB Mail server disk storage</li>
            <li>500 MB Database disk storage</li>
            <li>20 GB Bandwidth Traffic</li>
            <li>Microsoft SQL Databases</li>
            <li>FTP</li>
            <li>ASP.net</li>
            <li>24x7 uptime monitoring</li>
            <li>Technical support</li>
          </ul>
          <button className="btn btn-primary" style={{ marginLeft: "4%" }}>
            More Details
          </button>
          <p className="main1Heading2 text-dark mt-3">LINUX HOSTING</p>
          <p className="main1Heading2">PACKAGE STARTS AT $19.95/MONTH</p>

          <p className="main1Para">
            Infront's scalable, fully-managed Linux web hosting solution is
            perfect for CMS programs such as Drupal, WordPress, and Joomla.
          </p>
          <p className="main1Para">Features:</p>
          <ul className="main1Ul">
            <li>5 GB Web server disk storage</li>
            <li>250 MB Mail server disk storage</li>
            <li>500 MB Database disk storage</li>
            <li>20 GB Bandwidth Traffic</li>
            <li>MySQL Databases</li>
            <li>FTP</li>
            <li>PHP 4.0 and 5.0</li>
            <li>24x7 uptime monitoring</li>
            <li>Technical support</li>
          </ul>
          <button className="btn btn-primary" style={{ marginLeft: "4%" }}>
            More Details
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
