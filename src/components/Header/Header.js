import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { openProfile } from '../../store/Dashboard/dashboard.actions';

const Header = props => {
  return(
    <header className="header_box">
      <h2 className="header_box__logo">MyNotes</h2>
      <nav>
        <NavLink to="/dashboard" className="header_box__btn_item">Dashboard</NavLink>
        <NavLink to="/profile" className="header_box__btn_item">Profile</NavLink>
        <button onClick={props.logOut} className="header_box__btn_item">Sign Out</button>
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
