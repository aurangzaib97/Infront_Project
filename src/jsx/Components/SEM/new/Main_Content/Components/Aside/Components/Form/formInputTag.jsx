import React, { Component } from "react";
class Input extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="inputDiv">
          <div className="input">
            <div className="div">
              <label htmlFor={this.props.labelIdOne} className="labelName1">
                {this.props.labelNameOne}
              </label>
              <input
                type={this.props.typeOne}
                id={this.props.labelIdOne}
                className="inputTag"
                required={this.props.req1}
              />
            </div>
            <div className="div">
              <label htmlFor={this.props.labelIdTwo} className="labelName1">
                {this.props.labelNameTwo}
              </label>
              <input
                type={this.props.typeTwo}
                id={this.props.labelIdTwo}
                className="inputTag"
                required={this.props.req2}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
