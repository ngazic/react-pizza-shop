import React, {Component} from "react";
import logo from "../../images/logo.png";
import Navigation from "./Navigation";
import Cart from "./Cart";
import {Link} from "react-router-dom";


export default class Header extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      counter: 0,
      showNavigation: false,
      showCart: false
    };
    this.burgerBtn = this.burgerBtn.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.cartBtn = this.cartBtn.bind(this);
  }
  burgerBtn() {
    this.setState({
      showNavigation: !this.state.showNavigation
    });
  }
  cartBtn() {
    this.setState({
      showCart: !this.state.showCart
    })
  }
  closeNav(state) {
    switch(state) {
      case 'cart': {
        this.setState({showCart: false});
        break;
      }
      default: {
        this.setState({ showNavigation: false});
      }
    }
    console.log('close nav is called');
    console.log(state)
    console.log(this)
    this.setState({state: false});
  }
  render() {
    return (<header className="header clearfix">
      <div className="header__wrap">
        <span className="sb-toggle-left">
          <i className="icon pe-7s-menu" onClick={()=>{this.burgerBtn();this.closeNav('cart');}} ></i>
        </span>
        <Link className="logo" to='/'>
          <img className="img-responsive" src={logo} alt="Logo"/>
        </Link>
        <span className="header-basket" onClick={()=>{this.cartBtn();this.closeNav();}}>
          <i className="icon pe-7s-cart"></i>
          <span className="header-basket__number">2</span>
        </span>
      </div>
        {
          this.state.showNavigation
            ? (<Navigation closeNav={this.closeNav} />)
            : null
        }
        {
          this.state.showCart
            ? (<Cart closeCart={this.cartBtn} />)
            : null
        }
    </header>);
  }
}
