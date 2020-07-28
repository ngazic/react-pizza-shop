import React from "react";
import {Link} from "react-router-dom";

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

export default function Navigation(props) {
  return (<div class="sb-slidebar sb-left sb-active">
    <nav class="main-nav">
      <ul class="navig-menu list-unstyled">
        {
          pages.map(item => {
            return (<li className="navig-menu__item">
              <Link key={item.page} onClick={props.closeNav} className="navig-menu__link" to={"/" + item.link}>
                {item.page}
              </Link>
            </li>);
          })
        }
      </ul>
    </nav>
      <div className="border-bottom"></div>
      <li className="link-account">
        <Link onClick={props.closeNav} className="navig-menu__link" to="/checkout">
          checkout
        </Link>
      </li>
  </div>);
}
