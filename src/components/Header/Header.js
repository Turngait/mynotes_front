import React from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import { openProfile } from '../../store/Dashboard/dashboard.actions'

const Header = props => {
  return(
    <header className="header_box">
      <h2 className="header_box__logo">MyNotes</h2>
      <nav>
        <button onClick={props.openProfile} className="header_box__btn_item">Profile</button>
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
