import React, { Component } from "react";
class Main_Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main>
          <div className="mainContent">
            <section>
              <div className="content">
                <h1 className="contentHeading">DIGITAL MARKETING SERVICES</h1>
                <p className="contentPara">
                  Infront Webworks is a Digital Marketing Company that has a
                  full-service agency team of marketing experts. Headquartered
                  in Colorado Springs, Colorado, Infront has worked with
                  companies to deliver results and return on investment (ROI) on
                  the internet for nearly 20 years. We offer standard and fully
                  custom programs to fit your online needs and offer digital
                  marketing services internationally.
                </p>
                <h4 className="content2Head">
                  YOUR DIGITAL MARKETING NEEDS ARE UNIQUE
                </h4>
                <p className="contentPara">
                  At Infront Webworks, our marketing professionals have decades
                  of combined experience. Having worked with many different
                  industries, each with different goals, we know that you and
                  your business has distinct needs. We will take the time to
                  learn about your business, understand your goals, and create a
                  plan that fits your online marketing needs.
                </p>
              </div>
            </section>
            <aside>
              <div className="asideContent"></div>
            </aside>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Main_Content;
