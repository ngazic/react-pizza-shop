import React from "react";
import {Link} from "react-router-dom";
import {setTitle} from "../../actions/pageActions";
import {connect} from "react-redux"
import store from '../../store';

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
  const setTitle = (title) => {
    props.setTitle(title);
    console.log(store.getState());
  }
  return (<div className="sb-slidebar sb-left sb-active">
    <nav className="main-nav">
      <ul className="navig-menu list-unstyled">
        {
          pages.map(item => {
            return (<li key={item.page} className="navig-menu__item">
              <Link  onClick={() => {props.closeNav();setTitle(item.page);}} className="navig-menu__link" to={item.link} >
                {item.page}
              </Link>
            </li>);
          })
        }
      </ul>
    </nav>
      <div className="border-bottom"></div>
      <li className="link-account">
        <Link onClick={() => {props.closeNav();setTitle('Checkout');}} className="navig-menu__link" to="checkout">
          checkout
        </Link>
      </li>
  </div>);
}

const mapStateToProps = (state) =>({
  Title: state
 });

export default connect(mapStateToProps, {setTitle})(Navigation);