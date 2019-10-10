import React, { Component } from "react";
class Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="content">
            <h1 className="contentHeading2">MOBILE & RESPONSIVE WEBSITES</h1>
            <p className="contentPara">
              Why do you need a mobile-friendly website?
            </p>
            <ul className="seoUl">
              <li className="text-dark font-weight-normal">
                63% of cell phone owners use their devices to access the
                internet
              </li>
              <li className="text-dark font-weight-normal">
                34% of mobile internet users primarily use their phones for
                internet access
              </li>
              <li className="text-dark font-weight-normal">
                Of people who mostly use mobile internet, many don't own a
                desktop or laptop computer
              </li>
            </ul>
            <p className="contentPara">
              <i>Source: Pew Research Center</i>
            </p>
            <p className="content2Head font-weight-bold">RESPONSIVE DESIGN</p>
            <p className="contentPara">
              Responsive website design simply means that the visual appearance
              of your site scales to the size of any device's screen. Although
              there is a slightly higher investment, this option is more user
              friendly with a better long term ROI:
            </p>
            <ul className="seoUl">
              <li className="text-dark font-weight-normal">
                You only need to make content changes in one place
              </li>
              <li className="text-dark font-weight-normal">
                Maintain one website without the need for a mobile app
              </li>
              <li className="text-dark font-weight-normal">
                Visitors see the full site and all its content, no matter what
                device they're using
              </li>
              <li className="text-dark font-weight-normal contentPara ml-0">
                The content will be presented appropriately whether it's viewed
                from a large desktop monitor, a small laptop screen, a tablet,
                or a smartphone
              </li>
            </ul>
            <p className="content2Head font-weight-bold">
              SEPARATE MOBILE WEBSITE
            </p>
            <p className="contentPara">
              The least expensive option is to create a separate mobile website,
              but there's a trade-off in convenience:
            </p>
            <ul className="seoUl">
              <li className="text-dark font-weight-normal">
                A mobile website is completely separate from your website and
                must be updated separately
              </li>
              <li className="text-dark font-weight-normal">
                You need to pick and choose which content you think mobile
                visitors will most likely want to see
              </li>
              <li className="text-dark font-weight-normal">
                To see all of your website content, mobile visitors have to use
                a desktop or laptop computer
              </li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Content;
