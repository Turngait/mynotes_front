import React from 'react';
import {NavLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Header.scss';

const Header = props => {
  const { t } = useTranslation();

  return(
    <header className="header_box">
      <h2 className="header_box__logo">
        <NavLink to="/" className="header_box__logo_link">{t('appname')}</NavLink>
      </h2>
      <nav className="header_box__nav">
        {
          !props.mainPage ?
          <>
            <NavLink to="/dashboard" className="header_box__btn_item">{t('menu.dashboard')}</NavLink>
            <NavLink to="/profile" className="header_box__btn_item">{t('menu.profile')}</NavLink>
            <button onClick={props.logOut} className="header_box__btn_item">{t('menu.signout')}</button>
          </>
          : null
        }

      </nav>
    </header>
  )
}



export default Header;
