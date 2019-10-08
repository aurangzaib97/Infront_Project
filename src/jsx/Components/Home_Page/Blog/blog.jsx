import React, { Component, Fragment } from "react";
class Blog extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="Blog">
          <h1 className="display-4 font-weight-bold blogHeading">
            FROM OUR BLOG
          </h1>
          <div className="blogs">
            <div className="blog">
              <div className="img">
                <img
                  src="https://www.infront.com/images/default-source/blog/social-bookmarking.jpg?sfvrsn=592e70be_3"
                  alt="blog-img"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="blogContent">
                <h5 className="blogContentHeading">
                  What is Social Bookmarking and Why Does it Matter With SEO
                </h5>
                <p>
                  If you want your business found online, you must use every
                  tool available. Proper social bookmarking on a regular
                  schedule can help your SEO. But what is social bookmarking?
                  And how does it improve search results? Social bookmarking is
                  bookmarking a web page on your browser to read later. But it
                  is so much more than marking your place. Social bookmarks let
                  web users keep track of your content.
                </p>
                <div className="blogFooter">
                  <div className="footer">
                    <i className="fas fa-pencil-alt" />
                    <p>Brett Barney</p>
                  </div>
                  <div className="footer">
                    <i className="fas fa-calendar-alt" />
                    <p>Aug 6, 2019</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="img">
                <img
                  src="https://www.infront.com/images/default-source/blog/boost-seo-results.jpg?sfvrsn=9c730b97_3"
                  alt="blog-img"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="blogContent">
                <h5 className="blogContentHeading">
                  What is Social Bookmarking and Why Does it Matter With SEO
                </h5>
                <p>
                  If you want your business found online, you must use every
                  tool available. Proper social bookmarking on a regular
                  schedule can help your SEO. But what is social bookmarking?
                  And how does it improve search results? Social bookmarking is
                  bookmarking a web page on your browser to read later. But it
                  is so much more than marking your place. Social bookmarks let
                  web users keep track of your content.
                </p>
                <div className="blogFooter blogFooterTwo">
                  <div className="footer">
                    <i className="fas fa-pencil-alt" />
                    <p>Mike Tortorice</p>
                  </div>
                  <div className="footer">
                    <i className="fas fa-calendar-alt" />
                    <p>Aug 2, 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary text-uppercase font-weight-bold but-2">
            Visit Our Blog
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Blog;
