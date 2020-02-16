import React from 'react';
import './Header.scss';

const Header = () => {
  return(
    <header className="header_box">
      <h2 className="header_box__logo">MyNotes</h2>
      <nav>
        <a className="header_box__link_item" href="#">Profile</a>
        <a className="header_box__link_item" href="#">Sign Out</a>
      </nav>
    </header>
  )
}

export default Header;
