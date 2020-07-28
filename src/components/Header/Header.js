import React from 'react';
import logo from '../../images/logo.png';

function Header(props) {
  return (
    <header className="header clearfix">
      <div className="header__wrap">
        <span className="sb-toggle-left"><i className="icon pe-7s-menu"></i></span>
        <a className="logo" href="home.html"><img className="img-responsive" src={logo} alt="Logo" /></a>
        <span className="header-basket sb-toggle-right"><i className="icon pe-7s-cart"></i><span className="header-basket__number">2</span></span>
      </div>
    </header>
  );
}

export default Header;