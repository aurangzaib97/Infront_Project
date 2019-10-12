import React, { Component } from "react";
class Aside extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main2Aside">
          <form action="#">
            <div className="form-group d-flex w-100 justify-content-center mt-4">
              <input
                type="search"
                className="form-control w-75"
                placeholder="Search our blog"
              />
              <button className="btn bg-light ml-2">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <div className="w-100 d-flex justify-content-center">
            <div className="form2">
              <p className="formHeading">Subscribe to Our Blog</p>
              <div className="form-group flex-column d-flex w-100 align-items-center mt-4">
                <input
                  type="text"
                  className="form-control w-75"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control w-75 mt-3"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="form-control w-75 mt-3"
                  placeholder="EMail"
                />
                <label
                  htmlFor="hear0"
                  className="text-light mt-3 align-self-start blogLabel"
                  title="Optional"
                >
                  How did you hear about us ?
                </label>
                <select name="hear0" id="hear1" className="form-control w-75">
                  <option>Please Choose</option>
                  <option>Google Search</option>
                  <option>Facebook Posts</option>
                  <option>Word of Mouth</option>
                  <option>Social Media</option>
                  <option>Cannot Recall</option>
                  <option>Previous Customer</option>
                  <option>Direct Traffic</option>
                  <option>Other</option>
                  <option>Bing Search</option>
                  <option>Google Adwords</option>
                  <option>News Story</option>
                  <option>Awards Announcement</option>
                </select>
                <button className="btn btn-primary mt-3 align-self-start blogLabel">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Aside;
