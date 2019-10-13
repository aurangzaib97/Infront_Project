import React, { Component } from "react";
class Aside extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main3Aside">
          <div className="form3">
            <p className="form3Heading">START THE CONVERSATION</p>
            <form action="#">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control w-75 mt-3"
                  style={{ marginLeft: "10%" }}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control w-75 mt-3"
                  style={{ marginLeft: "10%" }}
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  className="form-control w-75 mt-3"
                  style={{ marginLeft: "10%" }}
                  placeholder="Company Name"
                />
                <input
                  type="email"
                  className="form-control w-75 mt-3"
                  style={{ marginLeft: "10%" }}
                  placeholder="Your Email"
                />
                <input
                  type="tel"
                  className="form-control w-75 mt-3"
                  style={{ marginLeft: "10%" }}
                  placeholder="Phone Number"
                />
                <input
                  type="url"
                  className="form-control w-75 mt-3"
                  style={{ marginLeft: "10%" }}
                  placeholder="Website"
                />
                <input
                  type="text"
                  className="form-control w-75 mt-3"
                  style={{ marginLeft: "10%" }}
                  placeholder="Project Description"
                />
                <label
                  htmlFor="hear9"
                  className="formLabel6 text-light mt-2"
                  title="Optional"
                  style={{ marginLeft: "10%" }}
                >
                  How did you hear about us ?
                </label>
                <select
                  name="hear"
                  id="hear9"
                  className="form-control w-75"
                  style={{ marginLeft: "10%" }}
                >
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
              </div>
            </form>
          </div>
          <div className="googleImg mt-3">
            <img
              src="https://www.infront.com/images/default-source/awards/google-reviews.jpg"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Aside;
