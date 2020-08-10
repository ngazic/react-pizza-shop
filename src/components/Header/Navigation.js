import React from "react";
import {Link} from "react-router-dom";
import {setTitle} from "../../actions/pageActions";
import {connect} from "react-redux"

const pages = [
  {
    page: "home",
    link: ""
  }, {
    page: "pizza menu",
    link: "menu"
  }, {
    page: "about us",
    link: "about-us"
  }, {
    page: "contact",
    link: "contact"
  }
];

function Navigation(props) {
  const setTitle = (title,link) => {
    props.setTitle(title,link);
  }
  return (<div className="sb-slidebar sb-left sb-active">
    <span className="sb-toggle-left" onClick={props.closeCart}><i className="icon pe-7s-close" onClick={props.closeNav}></i></span>
    <nav className="main-nav">
      <ul className="navig-menu list-unstyled">
        {
          pages.map(item => {
            return (<li key={item.page} className="navig-menu__item">
              <Link  onClick={() => {props.closeNav();setTitle(item.page,item.link);}} className="navig-menu__link" to={item.link} >
                {item.page}
              </Link>
            </li>);
          })
        }
      </ul>
    </nav>
      <div className="border-bttm"></div>
      <li className="link-account">
        <Link onClick={() => {props.closeNav();setTitle('Checkout','checkout');}} className="navig-menu__link" to="checkout">
          checkout
        </Link>
      </li>
  </div>);
}

const mapStateToProps = (state) =>({
  Title: state
 });

export default connect(mapStateToProps, {setTitle})(Navigation);