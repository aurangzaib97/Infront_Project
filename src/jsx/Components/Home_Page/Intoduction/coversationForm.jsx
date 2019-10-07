import React, { Fragment } from "react";
const ConversationForm = () => {
  return (
    <Fragment>
      <div className="form" style={{ marginLeft: "0px" }}>
        <form action="#" className="conversation">
          <h1>START THE CONVERSATION</h1>
          <div className="input-tags">
            <div className="tags">
              <div className="tag">
                <label
                  htmlFor="firstName"
                  className="text-light font-weight-bold conversation-label"
                >
                  First Name
                </label>
                <input type="text" className="d-block input" id="firstName" />
              </div>
              <div className="tag">
                <label
                  htmlFor="lastName"
                  className="text-light font-weight-bold conversation-label"
                >
                  Last Name
                </label>
                <input type="text" className="d-block input" id="lastName" />
              </div>
            </div>

            <div className="tags">
              <div className="tag">
                <label
                  htmlFor="companyName"
                  className="text-light font-weight-bold conversation-label"
                >
                  Company Name
                </label>
                <input type="text" className="d-block input" id="companyName" />
              </div>
              <div className="tag">
                <label
                  htmlFor="email"
                  className="text-light font-weight-bold conversation-label"
                >
                  Email
                </label>
                <input type="email" className="d-block input" id="email" />
              </div>
            </div>
            <div className="tags">
              <div className="tag">
                <label
                  htmlFor="ph.No."
                  className="text-light font-weight-bold conversation-label"
                >
                  Phone Number
                </label>
                <input type="tel" className="d-block input" id="ph.No." />
              </div>
              <div className="tag">
                <label
                  htmlFor="website"
                  className="text-light font-weight-bold conversation-label"
                >
                  Website
                </label>
                <input type="url" className="d-block input" id="website" />
              </div>
            </div>
            <div className="tags">
              <div className="tag-full">
                <label
                  htmlFor="projectDescription"
                  className="text-light font-weight-bold conversation-label"
                >
                  Project Description
                </label>
                <input
                  type="text"
                  className="d-block input-full"
                  id="projectDescription"
                />
              </div>
            </div>
            <div className="tags">
              <div className="tag-full">
                <label
                  htmlFor="hear"
                  className="text-light font-weight-bold conversation-label"
                >
                  How did you hear about us ?
                </label>
                <select
                  name="hear"
                  id="hear"
                  className="d-block input-full option text-light"
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
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary ml-3 mt-2 but"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ConversationForm;
