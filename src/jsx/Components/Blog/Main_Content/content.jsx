import React, { Component } from "react";
import Blog from "./Utils/blog";
class Content extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main2Div">
          <p className="main2Heading">THE INFRONT BLOG</p>
          <Blog
            heading="Implementing Social Media Into Your Business Marketing"
            date="Oct 9, 2019, 09:44 AM by Kevin Kennedy"
            img="https://www.infront.com/images/default-source/blog/getting-social-1.jpg?sfvrsn=254a2ffa_3"
            paragraph="Social media is an essential tool for businesses, so your social
            media campaign should be one of the biggest elements in your
            digital marketing strategy. Here's how to implement social media
            into your marketing."
            btn="Read More"
          />
          <Blog
            heading="Top 10 Benefits of PPC Ads for Your Company"
            date="Oct 4, 2019, 10:12 AM by Leon Averbukh"
            img="https://www.infront.com/images/default-source/blog/ppc-benefits-sm.jpg?sfvrsn=7d9904d1_3"
            paragraph="Do you own a business? Getting the most out of your
              marketing dollars can be tricky. Pay Per Click is an
              advertising model based on how many times people click on
              your ad, and has become one of the most effective ways to
              promote your business online. If you are new to PPC
              marketing, you are likely wondering how it could help your
              business. Let's review some of the major benefits of PPC
              that you could start taking advantage of today."
            btn="Read More"
          />
          <Blog
            heading="6 Signs Your Business Should Outsource SEO"
            date="Sep 30, 2019, 11:16 AM by Stephanie Hooper"
            img="https://www.infront.com/images/default-source/seo1/outsource-your-seo-120.png?sfvrsn=c216a4d8_3"
            paragraph="Most companies when launching their website and begin their online digital marketing campaigns try to put in the time to do it themselves. Not only does this take away from the business they actually do with staff and time, but most businesses just aren't experts in area of Search Engine Optimization, how to rank in Google and drive new traffic. Here are 6 signs that will help determine if you're business needs to outsource the tasks of SEO."
            btn="Read More"
          />
          <Blog
            heading="Infront Webworks Named an E-Commerce SEO Industry Leader by Clutch"
            date="Sep 25, 2019, 08:48 AM by Mike Tortorice"
            img="https://www.infront.com/images/default-source/seo1/clutch-ecommece-seo-company-2019-120.png?sfvrsn=1dc9c2b7_3"
            paragraph="
              Infront Webworks has been named as a 2019 Industry Leader in E-Commerce SEO by Clutch. We are proud to count ourselves among the best e-commerce SEO providers. Clutch is a B2B ratings and reviews platform. Their team analyzes data and conducts client interviews to rank companies."
            btn="Read More"
          />
          <Blog
            heading="Onsite vs Offsite SEO: What's the Difference?"
            date="Sep 20, 2019, 14:30 PM by Brett Barney"
            img="https://www.infront.com/images/default-source/blog/seo-onsite-vs-offsite-1.jpg?sfvrsn=f42d89b_3"
            paragraph="
              As a business owner or marketer, you're up against a lot of online competition, no matter your industry. You need to find every way possible to outperform your competitors. One great way to do this is through SEO, both onsite and offsite. However, this can be easier said than done. This post is to help you understand the difference between onsite and offsite SEO and how you can use both in your marketing strategy."
            btn="Read More"
          />
          <Blog
            heading="9 Tips for Mobile Web Design for a Better User Experience"
            date="Sep 16, 2019, 15:51 PM by Jon Litz"
            img="https://www.infront.com/images/default-source/blog/mobile-friendly-website.jpeg?sfvrsn=992f5c1d_3"
            paragraph="
              A great mobile design is very important and can make or break your website in the modern age. By creating a mobile web design that looks great and prioritizes usability, you'll ensure that people who visit your site will eventually become loyal customers who will keep coming back again and again."
            btn="Read More"
          />
          <Blog
            heading="Infront Webworks Receives SEOblog 2019 Top SEO Company Award"
            date="Sep 3, 2019, 14:42 PM by Mike Tortorice"
            img="https://www.infront.com/images/default-source/seo1/seoblog_seo_company_2019-120.jpg?sfvrsn=5acdf5e8_3"
            paragraph="
                Infront Webworks is awarded by SEOblog.com as the best SEO companies and best local SEO company. This award is comprised of only 15 companies per category and Infront was awarded as a leader in both categories."
            btn="Read More"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
