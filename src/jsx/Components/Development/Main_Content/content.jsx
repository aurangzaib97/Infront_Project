import React, { Component } from "react";
class Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="content">
            <h1 className="contentHeading2">WEBSITE DEVELOPMENT EXPERTS</h1>
            <h4 className="content2Head4">
              Designing custom applications based on your specific website needs
              and business goals
            </h4>
            <p className="contentPara">
              Website development is rapidly growing as an invaluable tool for
              business development. It can range from integrating simple code –
              let’s say from Constant Contact to encourage your customers to
              sign up for your newsletter – to developing complex content
              management systems to handle your sales, revenue and reporting
              with custom website coding.
            </p>
            <p className="contentPara">
              InFront Webworks is a trusted Google partner and award-winning web
              development company. With over 20 years of experience, our
              full-service agency will help you portray your business as you
              want to be seen, with a platform that’s built on your terms and
              can effectively market your services or products.
            </p>
            <p className="contentPara">
              Our team of award-winning web development experts collaborate
              across digital marketing specialties to produce powerful results
              for your business. From business-to-business and
              business-to-consumers websites, we engineer a tailored, responsive
              design built to perform.
            </p>
            <p className="contentPara">
              Our strategy is simple. Create custom website designs that produce
              strategic insights to generate greater brand engagement, higher
              conversions and measurable results. We have lots of experience
              programming dynamic, data-driven pages, simply adding content,
              evaluating and enhancing server security and web server
              configuration, e-commerce development and more. We've done the
              whole range from creating the simplest, plain text to the most
              difficult web-based applications, social network services and
              electronic business applications.
            </p>
            <p className="contentPara">
              With the help of custom website development, you can automate some
              of the repetitive manual tasks that you or your staff preform
              every day. That frees up your time so you can concentrate on other
              tasks.
            </p>
            <p className="contentPara">
              We design custom content management system platforms based on your
              specific website needs and business goals.
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
            <div className="content2Head text-dark font-weight-bold mt-3">
              Our web development experience includes:
            </div>
            <ul className="seoUl">
              <li className="text-dark font-weight-normal">
                Reporting and statistical analysis of health care records
              </li>
              <li
                className="text-dark font-weight-normal"
                style={{ width: "80%" }}
              >
                Complex e-commerce cart systems that accommodate complicated
                products with many dependencies on options that change pricing
              </li>
              <li className="text-dark font-weight-normal">
                E-learning systems that make the sale, track the progress and
                generate the certificate
              </li>
              <li className="text-dark font-weight-normal">
                Coding for love! Or at least a dating/matching site.
              </li>
            </ul>
            <p className="contentPara">
              The science for us involves leveraging the best technologies for
              the job, making content accessible to all types of people and all
              types of devices, focusing on the user experience and writing code
              that works every time.
            </p>
            <p className="contentPara">
              Infront Webworks makes this happen by being your single source for
              web development, marketing & cloud services; we are your online
              business partner.
            </p>
            <p className="content2Head text-center">TECHNOLOGIES WE LEVERAGE</p>
            <p className="content2Head font-weight-bold">
              CONTENT MANAGEMENT SYSTEMS
            </p>
            <p className="contentPara">
              Wordpress, Sitefinity and others by request.
            </p>
            <img
              src="https://www.infront.com/images/default-source/2018-assets/content-management-systems.jpg?sfvrsn=18026824_2"
              alt=""
              className="contentParaImg1"
              width="10%"
              style={{
                marginLeft: "4%"
              }}
            />
            <p className="content2Head font-weight-bold">
              PROGRAMMING LANGUAGES
            </p>
            <p className="contentPara">
              ASP.NET, ASP Classic, PHP, Ruby on Rails, and others by request
            </p>
            <img
              src="https://www.infront.com/images/default-source/web-design/program-languages.png?sfvrsn=772856bf_2"
              alt=""
              className="contentParaImg2"
              width="30%"
              style={{
                marginLeft: "4%"
              }}
            />
            <p className="contentPara">
              Contact us today to start building your custom website!
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
