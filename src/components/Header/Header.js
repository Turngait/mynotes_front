import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { openProfile } from '../../store/Dashboard/dashboard.actions';
import { useTranslation } from 'react-i18next';


const Header = props => {
  const { t } = useTranslation();

  return(
    <header className="header_box">
      <h2 className="header_box__logo">{t('appname')}</h2>
      <nav>
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

function mapDispatchFromPorps(dispatch) {
  return {
    openProfile: () => dispatch(openProfile())
  }
}

export default connect(null, mapDispatchFromPorps)(Header)
