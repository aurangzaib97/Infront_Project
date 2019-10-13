import React, { Component } from "react";
class Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main3Content">
          <p className="main4Heading">EMAIL SERVICES</p>
          <div className="img20">
            <img
              src="https://www.infront.com/images/default-source/cloud/mail58.png?sfvrsn=88964284_0"
              alt=""
              className="img21"
            />
          </div>
          <div className="main4Heading2">Email Encryption & Archiving</div>
          <p className="main3Para">
            Save all your business emails and document the transactions,
            correspondences, and proposals made to and from your office. Do so
            with peace of mind knowing that all your emails are protected from
            being read by anyone other than the intended recipient.
          </p>

          <div className="img20">
            <img
              src="https://www.infront.com/images/default-source/cloud/mail59.png?sfvrsn=8905ec7d_0"
              alt=""
              className="img21"
            />
          </div>
          <div className="main4Heading2">Exchange Hybrid</div>
          <p className="main3Para">
            Infront Hybrid Email uses a special routing technology that merges
            two email platforms under a single domain to give the right service
            to the right people. It’s a smart way to provide email to your
            company because it saves you money by reserving the most powerful
            email accounts for only the users who need them, while providing all
            the necessary features that the rest of the users need.
          </p>

          <div className="img20">
            <img
              src="https://www.infront.com/images/default-source/cloud/mail41.png?sfvrsn=79d6b163_0"
              alt=""
              className="img21"
            />
          </div>
          <div className="main4Heading2">Virus & Spam Protection</div>
          <p className="main3Para">
            The McAfee Virus protection program filters millions of email
            messages each month, and will protect your network no matter what
            size it is.
          </p>

          <div className="img20">
            <img
              src="https://www.infront.com/images/default-source/cloud/signal34.png?sfvrsn=69a98d39_0"
              alt=""
              className="img21"
            />
          </div>
          <div className="main4Heading2">Mobile Email</div>
          <p className="main3Para">
            Access your email on your mobile device or tablet through POP or
            IMAP. Gain access from your home or a remote location to your mail,
            contacts, calendar, and more.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
