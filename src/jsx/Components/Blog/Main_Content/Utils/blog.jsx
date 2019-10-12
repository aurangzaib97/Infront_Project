import React, { Component } from "react";
class Blog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="blogInfo">
          <p className="main2Heading2">{this.props.heading}</p>
          <p className="date">{this.props.date}</p>
          <div className="w-100" style={{ position: "relative" }}>
            <div className="blogDetails">
              <img
                src={this.props.img}
                alt=""
                className="blogImg"
                width="100%"
              />
              <p className="main2Para">{this.props.paragraph}</p>
            </div>
            <div className="btnDiv">
              <button className="btn btn-primary">{this.props.btn}</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
