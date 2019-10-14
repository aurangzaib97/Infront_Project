import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/home";
import DigitalMarketing from "./Pages/digitalMarketing";
import SEO from "./Pages/seo";
import SEM from "./Pages/sem";
import SocialMedia from "./Pages/socialMedia";
import Web from "./Pages/web";
import WebDesign from "./Pages/webDesign";
import Development from "./Pages/development";
import Ecommerce from "./Pages/ecommerce";
import CloudServices from "./Pages/cloudServices";
import MobileSites from "./Pages/mobileSites";
import About from "./Pages/about";
import TheTeam from "./Pages/theTeam";
import Company from "./Pages/company";
import Jobs from "./Pages/jobs";
import Portfolio from "./Pages/portfolio";
import CaseStudies from "./Pages/caseStudies";
import Support from "./Pages/support";
import Blog from "./Pages/blog";
import DomainRegistration from "./Pages/domainRegistration";
import EmailServices from "./Pages/emailServices";
import WebHosting from "./Pages/webHosting";
import TermsOfServices from "./Pages/termsOfServices";
import PrivacyPolicy from "./Pages/privacyPolicy";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/digitalMarketing" component={DigitalMarketing} />
        <Route path="/seo" component={SEO} />
        <Route path="/sem" component={SEM} />
        <Route path="/social-media" component={SocialMedia} />
        <Route path="/websites" component={Web} />
        <Route path="/web-design" component={WebDesign} />
        <Route path="/development" component={Development} />
        <Route path="/ecommerce" component={Ecommerce} />
        <Route path="/cloud-services" component={CloudServices} />
        <Route path="/mobile-sites" component={MobileSites} />
        <Route path="/about" component={About} />
        <Route path="/the-team" component={TheTeam} />
        <Route path="/company" component={Company} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/blog" component={Blog} />
        <Route path="/support" component={Support} />
        <Route path="/domain-registration" component={DomainRegistration} />
        <Route path="/email-services" component={EmailServices} />
        <Route path="/web-hosting" component={WebHosting} />
        <Route path="/terms-of-services" component={TermsOfServices} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
      </React.Fragment>
    );
  }
}
export default App;
