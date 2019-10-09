import React, { Component } from "react";
import $ from "jquery";
class Toggle extends Component {
  render() {
    $(document).ready(() => {
      $(`#${this.props.id}`).click(() => {
        $(`.${this.props.divClass}`).toggle(1000);
      });
    });
    return (
      <React.Fragment>
        <button className="btn btn-dark button_toogle" id={this.props.id}>
          {this.props.btnName}
        </button>
        <div className={this.props.divClass}>
          <ul>
            <li className={this.props.liClassOne}>{this.props.liOne}</li>
            <li className={this.props.liClassTwo}>{this.props.liTwo}</li>
            <li className={this.props.liClassThree}>{this.props.liThree}</li>
            <li className={this.props.liClassFour}>{this.props.liFour}</li>
            <li className={this.props.liClassFive}>{this.props.liFive}</li>
            <li className={this.props.liClassSix}>{this.props.liSix}</li>
            <li className={this.props.liClassSeven}>{this.props.liSeven}</li>
            <li className={this.props.liClassEight}>{this.props.liEight}</li>
          </ul>
          <button className="btn btn-primary learn-btn" id={this.props.learnid}>
            {this.props.learnBtn}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Toggle;
