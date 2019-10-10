import React, { Component } from "react";
class Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="content">
            <h1 className="contentHeading2">CLOUD SERVICES</h1>
            <h4 className="content2Head4">
              <i>
                We design solutions tailored to meet the needs of your business
              </i>
            </h4>
            <p className="contentPara">
              As businesses have become more reliant on technology to serve
              customers and provide business tools to staff, the tolerance for
              downtime has decreased. That is why it’s important to find the
              right company to host and store your business’ data and programs.
              Experience has shown that network downtimes can lead to a costly
              chain of events, including losing customers, decreasing employee
              productivity, data failure and loss of revenue.
            </p>
            <p className="contentPara">
              Infront Webworks is a trusted Google partner and award-winning web
              company. For over 20 years, our full-service agency has provided
              cloud services to its clients in the areas of:
            </p>
            <ul className="seoUl">
              <li className="text-dark font-weight-normal">
                Domain Name Management
              </li>
              <li className="text-dark font-weight-normal">
                Unix & Windows Hosting
              </li>
              <li className="text-dark font-weight-normal">
                Virtual Dedicated Servers
              </li>
              <li className="text-dark font-weight-normal">
                Microsoft Hosted Exchange
              </li>
              <li className="text-dark font-weight-normal">
                Business Grade Email
              </li>
              <li className="text-dark font-weight-normal">
                Virus & Spam Protection
              </li>
              <li className="text-dark font-weight-normal">
                Email Marketing, Email Archiving, Email Encryption
              </li>
              <li className="text-dark font-weight-normal">Offsite Backup</li>
            </ul>
            <p className="contentPara">
              Our team of experts collaborate across specialties to produce
              powerful results for your business. We understand every business
              is unique. That’s why we design solutions tailored to meet the
              needs of your business or project. Together we will build
              solutions including cloud design, data storage, security and
              access, engineering, monitoring and service upgrades.
            </p>
            <div className="orangeDiv">
              <p className="orangeHeading">
                From Domain Management to Hosting to Email
              </p>
              <p className="contentPara orangePara">
                Infront has you covered! We have literally years of experience -
                take advantage of our know-how!
              </p>
              <button
                className="btn btn-primary learn-btn"
                style={{ marginLeft: "4%" }}
              >
                Contact Us
              </button>
            </div>
            <div className="heading">
              <div
                className="circle mt-3 d-flex justify-content-center h-0"
                style={{ width: "90%" }}
              >
                <img
                  src="https://www.infront.com/images/default-source/cloud/domain10ad151371c074d70923d2d63074d59cc.png?sfvrsn=6399e918_0"
                  className="contentParaImg3"
                  alt=""
                  width="7%"
                />
              </div>
            </div>
            <p className="content2Head font-weight-bold">Domain Management</p>
            <p className="contentPara">
              Providing cost effective fully manageable domain services with
              Infront’s own Domain Name management portal built into Infront’s
              Billing/Support System. Infront provides a dedicated expert
              skilled in Domain registry and knowledge base of current ICANN
              regulations to help with all our clients’ needs.
            </p>
            <div className="heading">
              <div
                className="circle mt-3 d-flex justify-content-center h-0"
                style={{ width: "90%" }}
              >
                <img
                  src="https://www.infront.com/images/default-source/cloud/network1.png?sfvrsn=4f26619_0"
                  className="contentParaImg3"
                  alt=""
                  width="7%"
                />
              </div>
            </div>
            <p className="content2Head font-weight-bold">Hosting</p>
            <p className="contentPara">
              You'll be impressed with our Linux, cPanel and Windows shared or
              dedicated hosting solutions. Infront Webworks data center is
              located in Colorado Springs, within minutes of our home office. We
              use industry-leading Dell servers and VMware software and have a
              98.9% up-time service record.
            </p>
            <div className="heading">
              <div
                className="circle mt-3 d-flex justify-content-center h-0"
                style={{ width: "90%" }}
              >
                <img
                  src="https://www.infront.com/images/default-source/cloud/email.png?sfvrsn=94aa8c1d_0"
                  className="contentParaImg3"
                  alt=""
                  width="7%"
                />
              </div>
            </div>
            <p className="content2Head font-weight-bold">Email</p>
            <p className="contentPara">
              Get the efficiency of Microsoft Exchange with Active Sync and a
              whopping 25-gig mailbox with Symantec’s virus and spam protection.
              We also provide Business Class POP3 email services with our own
              branded SpamWorks Spam filtering.
            </p>
            <div className="heading">
              <div
                className="circle mt-3 d-flex justify-content-center h-0"
                style={{ width: "90%" }}
              >
                <img
                  src="https://www.infront.com/images/default-source/cloud/browser.png?sfvrsn=a8085301_0"
                  className="contentParaImg3"
                  alt=""
                  width="7%"
                />
              </div>
            </div>
            <p className="content2Head font-weight-bold">Cloud Services</p>
            <p className="contentPara">
              Infront Webworks Cloud Services provide safe and secure shared
              website hosting on Linux, Windows and cPanel environments. We also
              provide Rapid SSL and GEOtrust SSL certificates for added
              protection. Infront Webwoks can also provide solutions for VPS and
              MVPS depending on your needs, contact us.
            </p>
            <div className="orangeDiv">
              <p className="orangeHeading">Looking for more info?</p>
              <p className="contentPara orangePara">
                Try our portfolio page, where you can see a small sample of the
                hundreds of sites we've built. Or check out the answer to a
                question we are often asked 'What does a website cost?'
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Content;
