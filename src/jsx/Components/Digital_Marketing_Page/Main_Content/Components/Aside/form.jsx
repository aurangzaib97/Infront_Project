import React, { Component } from "react";
import InputTag from "./Components/Form/formInputTag";
class Form extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="form">
          <h4 className="formHead">START THE CONVERSATION</h4>
          <form action="#">
            <InputTag
              labelNameOne="First Name"
              labelNameTwo="Last Name"
              labelIdOne="fname1"
              labelIdTwo="lname1"
              typeOne="text"
              typeTwo="text"
            />
            <InputTag
              labelNameOne="Company Name"
              labelNameTwo="EMail"
              labelIdOne="CName1"
              labelIdTwo="EMail1"
              typeOne="text"
              typeTwo="email"
            />
            <InputTag
              labelNameOne="Phone Number"
              labelNameTwo="Website"
              labelIdOne="PNumber1"
              labelIdTwo="website1"
              typeOne="tel"
              typeTwo="url"
            />
            <div className="inputDiv">
              <div className="input">
                <div style={{ width: "100%" }}>
                  <label htmlFor="des" className="labelName1">
                    Project Description
                  </label>
                  <input type="text" id="des" className="inputTag inputTag2" />
                </div>
              </div>
            </div>
            <div className="inputDiv">
              <div className="input">
                <div style={{ width: "100%" }}>
                  <label htmlFor="hear1" className="labelName1">
                    How did you hear about us ?
                  </label>
                  <select name="hear" id="hear1" className="inputTag inputTag2">
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
            </div>
            <input
              type="submit"
              value="Send"
              className="btn btn-primary mt-3 responsive-form-btn"
              style={{ marginLeft: "1vw" }}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
