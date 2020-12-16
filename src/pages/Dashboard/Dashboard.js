import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import LeftMenu from './LeftMenu/LeftMenu';
import MyFinance from './MyFinance/MyFinance';

import { getToken, getSettings, logOut, getFinData } from '../../store/User/user.actions';
import {getCostItems, getCostForPeriod} from '../../store/Costs/costs.actions';
import {getIncomes} from '../../store/Incomes/income.action';

import './Dashboard.scss';

/*
  Dashboard component which render all section
*/

class Dashboard extends Component {
  state = {
    incomeOpen: false,
    costOpen: true
  }

  openCostHandler = () => {
    this.setState({
      costOpen: true,
      incomeOpen: false
    })
  }

  openIncomeHandler = () => {
    this.setState({
      incomeOpen: true,
      costOpen: false
    })
  }

  async componentDidMount() {
    const token = await this.props.getToken();
    this.props.getSettings();
    if (!token) {
      this.props.history.push('/')
      return null;
    }
    await this.props.getFinData(token);
  }

  async componentDidUpdate() {
    const token = this.props.getToken();
    this.props.getSettings();

    if (!token) {
      this.props.history.push('/');
      return null;
    }
    await this.props.getFinData(token);
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
            <LeftMenu 
              incomeOpen={this.state.incomeOpen} 
              costOpen={this.state.costOpen}
              openCostHandler={this.openCostHandler}
              openIncomeHandler={this.openIncomeHandler}
            />
          </aside>
          <section className="main_box__info">
            <MyFinance
              incomeOpen={this.state.incomeOpen} 
              costOpen={this.state.costOpen}
            />
          </section>
        </main>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    costPeriod: state.costs.costPeriod
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFinData: (token) => dispatch(getFinData(token)),
    getToken: () => dispatch(getToken()),
    getSettings: () => dispatch(getSettings()),
    logOut: () => dispatch(logOut()),
    getCostItems: (token) => dispatch(getCostItems(token)),
    getCostForPeriod: (data) => dispatch(getCostForPeriod(data)),
    getIncomes: (token) => dispatch(getIncomes(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
