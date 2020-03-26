import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Dashboard.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LeftMenu from './LeftMenu/LeftMenu'
import MyFinance from './MyFinance/MyFinance'
import Wishlist from './Wishlist/Wishlist'
import Profile from './Profile/Profile'
import { getToken, logOut } from '../../store/User/user.actions'

/*
  Dashboard component which render all section
*/

class Dashboard extends Component {
  componentDidMount() {
    const token = this.props.getToken()
    if (!token) {
      this.props.history.push('/')
    }
  }

  logOut = () => {
    this.props.logOut()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="flexbox">
        <Header logOut={this.logOut} />
        <main className="main_box">
          <aside className="main_box__menu">
            <LeftMenu />
          </aside>
          <section className="main_box__info">
            {this.props.financeOpen ? <MyFinance/> : null}
            {this.props.wlistOpen ? <Wishlist/> : null}
            {this.props.profileOpen ? <Profile/> : null}
          </section>
        </main>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    wlistOpen: state.dashboard.wlistOpen,
    financeOpen: state.dashboard.financeOpen,
    profileOpen: state.dashboard.profileOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getToken: () => dispatch(getToken()),
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
