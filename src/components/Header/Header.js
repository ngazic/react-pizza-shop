import React, {Component} from "react";
import logo from "../../images/logo.png";
import Navigation from "./Navigation";


export default class Header extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      counter: 0,
      showNavigation: false
    };
    this.burgerBtn = this.burgerBtn.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  burgerBtn() {
    this.setState({
      showNavigation: !this.state.showNavigation
    });
  }
  closeNav() {
    this.setState({showNavigation: false});
  }
  render() {
    return (<header className="header clearfix">
      <div className="header__wrap">
        <span className="sb-toggle-left">
          <i className={`icon   ${
            !this.state.showNavigation
              ? "pe-7s-menu"
              : "pe-7s-close"}`} onClick={this.burgerBtn}></i>
        </span>
        <a className="logo" href="home.html">
          <img className="img-fluid" src={logo} alt="Logo"/>
        </a>
        <span className="header-basket sb-toggle-right">
          <i className="icon pe-7s-cart"></i>
          <span className="header-basket__number">2</span>
        </span>
      </div>
        {
          this.state.showNavigation
            ? (<Navigation closeNav={this.closeNav} />)
            : null
        }
    </header>);
  }
}
