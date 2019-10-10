import React, { Component } from "react";
class Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="content">
            <h1 className="contentHeading3">
              WEBSITE EXPERTISE YOU CAN RELY ON
            </h1>
            <p className="contentPara">
              In today’s market, customers make decisions about your business
              before they even speak to you. And their decisions to purchase are
              based on their online experience – specifically the{" "}
              <b>appearance, usability and accessibility of your website.</b>
            </p>
            <p className="contentPara">
              Infront Webworks is a trusted Google partner and award-winning
              website development company with expertise in planning and
              building websites, SEO, digital marketing and cloud services. For
              more than 20 years, we've been building world-class websites and
              web applications, drawing visitors to clients' websites, and
              delivering exceptional email, hosting, vpn and virtual server
              related services.
            </p>
            <p className="contentPara">
              Our team of award-winning website development and design experts
              collaborate across specialties to produce powerful results for
              your business. With Infront, you will work with highly-innovative
              staff, including designers, programmers, database engineers, cloud
              engineers, production managers, marketing SEO specialists, and
              support staff.
            </p>
            <p className="contentPara">
              All of our processes, experience and skills combine to deliver a
              visually compelling, functionality rich experience for your
              customers. Your business will also benefit from a set of
              professional, reliable tools supported by a team of world-class
              website experts.
            </p>
            <div className="orangeDiv">
              <p className="orangeHeading">
                Just a simple site? Or complex custom coding?
              </p>
              <p className="contentPara orangePara">
                Infront is one of the few digital agencies that has extensive
                experience creating sites from one end of the spectrum to the
                other.
              </p>
              <button
                className="btn btn-primary learn-btn"
                style={{ marginLeft: "4%" }}
              >
                Contact Us
              </button>
            </div>
            <p className="content2Head font-weight-bold text-dark mt-3">
              UPDATING AN EXISTING WEBSITE?{" "}
            </p>
            <p className="contentPara">
              We can help with that too, and have extensive experience moving
              existing websites into modern platforms. Together, we will discuss
              tools that not only make it easier to manage your website but
              enhance its functionality with newer applications. If you've
              outgrown your website, give us a call. If you're afraid to find
              out how much it will cost to replace a site that was expensive a
              decade ago, let's talk. We can help you work through ROI and
              collaborate on a phased approach that works for your budget, the
              future growth of your business and your site users.
            </p>
            <p className="contentPara">
              It's not just our job, it's our craft. We like to become part of
              our clients' team; you can think of us as an extension of your
              staff. We are transparent in our processes, honest in our
              communication and committed to your success.{" "}
            </p>
            <p className="contentPara">
              We've made a science of finding and using the best technologies
              for the job. Our focus on user experience means your content will
              be accessible to all types of people and devices, delivering the
              brand experience your customers desire.
            </p>
            <p className="contentPara">Website development we love to do:</p>
            <ul className="seoUl">
              <li className="font-weight-normal">Small Business Websites</li>
              <li className="font-weight-normal">
                Responsive & Mobile Websites
              </li>
              <li className="font-weight-normal">WordPress Websites</li>
              <li className="font-weight-normal">Sitefinity Websites</li>
              <li className="font-weight-normal" style={{ color: "#005cb9" }}>
                Custom Web Applications
              </li>
              <li className="font-weight-normal">View our Website Portfolio</li>
            </ul>
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
