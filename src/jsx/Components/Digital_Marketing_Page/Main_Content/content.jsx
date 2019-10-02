import React, { Component } from "react";
import ToggleButton from "./Components/Content/toggle";
class Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="content">
            <h1 className="contentHeading">DIGITAL MARKETING SERVICES</h1>
            <p className="contentPara">
              Infront Webworks is a Digital Marketing Company that has a
              full-service agency team of marketing experts. Headquartered in
              Colorado Springs, Colorado, Infront has worked with companies to
              deliver results and return on investment (ROI) on the internet for
              nearly 20 years. We offer standard and fully custom programs to
              fit your online needs and offer digital marketing services
              internationally.
            </p>
            <h4 className="content2Head">
              YOUR DIGITAL MARKETING NEEDS ARE UNIQUE
            </h4>
            <p className="contentPara">
              At Infront Webworks, our marketing professionals have decades of
              combined experience. Having worked with many different industries,
              each with different goals, we know that you and your business has
              distinct needs. We will take the time to learn about your
              business, understand your goals, and create a plan that fits your
              online marketing needs.
            </p>
            <div className="orangeDiv">
              <p className="orangeHeading">
                Shortlisted as the Best SEO Agency 2017 & 2018!
              </p>
              <p className="contentPara orangePara">
                2018- Interactive Marketing Awards, Finalist in 3 Categories-
                Best Interactive Marketing – Retailer / Ecommerce, Best SEO
                Campaign, Search Agency of the Year. 2017 US Search Awards
                Finalist "Best Small SEO Agency of the Year".
              </p>
            </div>
            <div className="toogle">
              <p className="content2Head toogleHead">
                DIGITAL MARKETING SERVICES INFRONT WEBWORKS OFFERS
              </p>
              <ToggleButton
                btnName="ADVERTISING MANAGEMENT"
                liOne="Ad operations revenue optimization"
                liTwo="Banner advertising set up and consulting"
                liThree="DFP Set up management"
                liFour="Website monetization setup and consulting"
                liClassFive="liFive"
                liClassSix="liSix"
                liClassSeven="liSeven"
                liClassEight="liEight"
                learnBtn="Learn More"
                id="btn-1"
                divClass="item-1"
              />
              <ToggleButton
                btnName="CONTENT STRATEGY & CREATION"
                liOne="Blog writing"
                liTwo="Content Planning"
                liThree="Page content"
                liClassFour="liFour"
                liClassFive="liFive"
                liClassSix="liSix"
                liClassSeven="liSeven"
                liClassEight="liEight"
                learnBtn="Learn More"
                id="btn-2"
                divClass="item-2"
              />
              <ToggleButton
                btnName="DIGITAL MARKETING CONSULTING"
                liOne="Digital marketing speaking engagement services"
                liTwo="Digital marketing workshops, seminars, classes"
                liThree="Hourly digital marketing  consulting"
                liFour="Monthly white label retainer services"
                liClassFive="liFive"
                liClassSix="liSix"
                liClassSeven="liSeven"
                liClassEight="liEight"
                learnid="learn"
                learnBtn="Learn More"
                id="btn-3"
                divClass="item-3"
              />
              <ToggleButton
                btnName="INBOUND MARKETING"
                liOne="Campaign set up and implementation"
                liTwo="Customer persona identification consulting"
                liThree="Inbound Solution set up and management"
                liFour="Hubspot"
                liFive="Sharpspring"
                liSix="Measurement set up and implementation"
                liSeven="Workflow and automated marketing implementation"
                liClassEight="liEight"
                learnid="learn"
                learnBtn="Learn More"
                id="btn-4"
                divClass="item-4"
              />
              <ToggleButton
                btnName="LINK BUILDING"
                liOne="Citation building"
                liTwo="Guest Blogging"
                liThree="White label link building"
                liClassFour="liFour"
                liClassFive="liFive"
                liClassSix="liSix"
                liClassSeven="liSeven"
                liClassEight="liEight"
                learnid="learn"
                learnBtn="Learn More"
                id="btn-5"
                divClass="item-5"
              />
              <ToggleButton
                btnName="PAY PER CLICK"
                liOne="Banner Ad Buying"
                liTwo="Bing PPC ads"
                liThree="Google Adwords for paid search"
                liClassFour="liFour"
                liClassFive="liFive"
                liClassSix="liSix"
                liClassSeven="liSeven"
                liClassEight="liEight"
                learnBtn="Learn More"
                id="btn-6"
                divClass="item-6"
              />
              <ToggleButton
                btnName="REPUTATION MANAGEMENT"
                liOne="Review aggregation services"
                liTwo="Review management programs"
                liClassThree="liThree"
                liClassFour="liFour"
                liClassFive="liFive"
                liClassSix="liSix"
                liClassSeven="liSeven"
                liClassEight="liEight"
                learnBtn="Learn More"
                id="btn-7"
                divClass="item-7"
              />
              <ToggleButton
                btnName="SEARCH ENGINE OPTIMIZATION"
                liOne="SEO Audits"
                liTwo="SEO Consulting"
                liThree="SEO Programs"
                liFour="SEO Tools"
                liFive="SEO Training"
                liSix="SEO Workshops"
                liSeven="Wholesale SEO"
                liClassEight="liEight"
                learnBtn="Learn More"
                id="btn-8"
                divClass="item-8"
              />
              <ToggleButton
                btnName="SOCIAL MEDIA"
                liOne="Facebook"
                liTwo="Linkedin"
                liThree="Mixed Social Programs"
                liFour="More Social Media Programs"
                liFive="Pinetrest"
                liSix="Social media content creation"
                liSeven="Social media paid campaign management"
                liEight="Twitter"
                learnid="learn"
                learnBtn="Learn More"
                id="btn-9"
                divClass="item-9"
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Content;
