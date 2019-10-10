import React, { Component } from "react";
class Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="content">
            <h1 className="contentHeading4">WEB DESIGN THAT INSPIRES ACTION</h1>
            <p className="contentPara">
              Infront Webworks is a trusted Google partner and award-winning web
              development company. We believe strongly in the concepts of
              architecture and user-centric navigation, but we also know that
              the way a website appears visually to the customer is just as
              important.
            </p>
            <p className="contentPara">
              Creativity is at the heart of everything we do, but nowhere is it
              more evident than in the visual impact of the sites we design.
            </p>
            <p className="contentPara">
              Architecture, programming, database engineering and promotion are
              all extremely important to a successful website; however, all is
              in vain if the website appears ugly, unprofessional and does not
              portray your brand with the impact it deserves.
            </p>
            <p className="contentPara">
              With the explosion in the number of competing websites, it's
              critical that your website's first impression be a good one - you
              most likely will only get one chance. A professional website
              design that takes into account your brand, color, visual layout,
              navigation, photography and message is imperative to establishing
              the credibility of your website and your company.
            </p>
            <p className="contentPara">
              For more than 20 years, our team of award-winning web design
              experts have produced powerful results.
            </p>
            <div className="orangeDiv">
              <p className="orangeHeading">
                Are you making a good first impression?
              </p>
              <p className="contentPara orangePara">
                With the explosion in the number of competing websites, it's
                critical that your website's first impression be a good one -
                you most likely will only get one chance. A professional design
                is the best place to start.
              </p>
              <button
                className="btn btn-primary learn-btn"
                style={{ marginLeft: "4%" }}
              >
                Contact Us
              </button>
            </div>
            <p className="content2Head3 font-weight-bold text-dark mt-3">
              HOW DO WE CREATE GREAT DESIGNS THAT GET AMAZING RESULTS?
            </p>
            <p className="contentPara">
              We have a highly-refined process that starts with our kick-off
              questionnaire. We want to know your business goals, what is
              important to your users and your design preferences. We look at
              what your competitors are doing. We find out what sets you apart
              from the crowd. We take all of this information, add inspiration,
              creativity and marketing strategies to create custom designs that
              inspire users to act.
            </p>
            <p className="content2Head font-weight-bold text-dark mt-3">
              THE PROCESS
            </p>
            <div className="heading">
              <div className="circle">
                <img
                  src="https://www.infront.com/images/default-source/2018-assets/website-design.png?sfvrsn=20c42ee_6"
                  alt=""
                  width="100%"
                />
              </div>
              <p className="contentPara font-weight-bold mt-3">
                Phase One: Design of the Home Page
              </p>
            </div>
            <p className="contentPara">
              During this part of the process the design team collaborates and
              brainstorms the ideas for the design of your new site. We will
              review the questionnaire you provided and the notes from our
              kickoff meeting. We will then go to work on creating a mock-up of
              our vision of your home page. The home page is the first
              impression for your visitors, so it is very important that the
              designers take their time to evaluate the best way to present the
              most important elements. Once we have created a design that we
              believe meets your needs we will schedule a time to review the
              design with you. At this point you will have the opportunity to
              evaluate the design and discuss with us any potential changes.
              Keep in mind we will not move onto the interior design until you
              are completely satisfied with the home page design.
            </p>
            <div className="heading">
              <div className="circle">
                <img
                  src="https://www.infront.com/images/default-source/2018-assets/website-design.png?sfvrsn=20c42ee_6"
                  alt=""
                  width="100%"
                />
              </div>
              <p className="contentPara font-weight-bold mt-3">
                Phase Two: Design of the Interior Pages
              </p>
            </div>
            <p className="contentPara">
              The design team works on a design to be used on the interior pages
              of your site. This step in the process is typically faster since
              the bulk of the creativity is used to create the home page. It is,
              nonetheless, a different design and depending on the complexity of
              the site itself it is difficult to determine an exact timeline.
              Again, once we have created a design that we believe illustrates
              and identifies your needs we will schedule a time to review. As we
              did with the home page design you will also have the opportunity
              to evaluate and discuss with us any potential changes. Once you
              have approved both the home page and interior we will move into
              phase three: Development.
            </p>
            <div className="heading">
              <div className="circle">
                <img
                  src="https://www.infront.com/images/default-source/2018-assets/website-design.png?sfvrsn=20c42ee_6"
                  alt=""
                  width="100%"
                />
              </div>
              <p className="contentPara font-weight-bold mt-3">
                Phase Three: Development
              </p>
            </div>
            <p className="contentPara">
              During this process the team works to translate the design into
              html code and install it on a live development server. Depending
              on the complexity of the design of your site, this part of the
              process can be lengthy. If your site has custom functionality or
              coding that will also impact the timeline. As soon as we have the
              code written and installed on our development server we can begin
              to load content. During the Development phase it is the perfect
              time for you to organize your content so we can get it loaded as
              soon as it is ready. Be sure to provide the content for each page,
              and all necessary images and/or files.
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
