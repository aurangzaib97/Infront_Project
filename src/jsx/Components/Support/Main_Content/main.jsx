import React, { Component } from "react";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main1">
          <h1 className="main1Heading">INFRONT CUSTOMER HELP DESK</h1>
          <p className="main1Heading2 text-dark mt-3">Contact Us</p>
          <ul className="main1Ul">
            <li>Create a Support Ticket</li>
            <li>Website/email Support: 719-359-5540</li>
            <li>Billing Support: 719-577-4404 option 3</li>
          </ul>
          <p className="main1Heading2 text-dark mt-3">Help Desk Phone Hours</p>
          <ul className="main1Ul">
            <li>8 A.M. - 5 P.M. Monday thru Friday MST</li>
            <li>Closed: Nights, Weekends & Holidays*</li>
            <li>
              After-hours Support is handled by email and Help Desk Ticket
              System
            </li>
          </ul>
          <p className="main1Heading2 text-dark mt-3">Response Times</p>
          <ul className="main1Ul">
            <li>Business hours (8 A.M. - 5 P.M.): up to 1 hour</li>
            <li>After hours: up to 4 hours</li>
            <li>All our services and websites are monitored 24x7x365</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
