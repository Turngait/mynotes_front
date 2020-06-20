import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LeftMenu from './LeftMenu/LeftMenu';
import MyFinance from './MyFinance/MyFinance';
import Wishlist from './Wishlist/Wishlist';
import { getToken, getSettings, logOut } from '../../store/User/user.actions';
import {getWlistItem} from '../../store/Wlist/wlist.actions';
import {getCostItems} from '../../store/Costs/costs.actions';
import {getIncomes} from '../../store/Incomes/income.action';

/*
  Dashboard component which render all section
*/

class Dashboard extends Component {
  componentDidMount() {
    const token = this.props.getToken();
    this.props.getSettings();
    if (!token) {
      this.props.history.push('/')
    }
    this.props.getCostItems(token)
    this.props.getWlistItem(token)
    this.props.getIncomes(token)
  }

  componentDidUpdate() {
    const token = this.props.getToken();
    this.props.getSettings();

    if (!token) {
      this.props.history.push('/')
    }
    this.props.getCostItems(token)
    this.props.getWlistItem(token)
    this.props.getIncomes(token)
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
    getSettings: () => dispatch(getSettings()),
    logOut: () => dispatch(logOut()),
    getWlistItem: (token) => dispatch(getWlistItem(token)),
    getCostItems: (token) => dispatch(getCostItems(token)),
    getIncomes: (token) => dispatch(getIncomes(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
