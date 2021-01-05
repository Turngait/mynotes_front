import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import LeftMenu from './LeftMenu/LeftMenu';
import MyFinance from './MyFinance/MyFinance';

import { getToken, getSettings, logOut, setBudget } from 'store/User/user.actions';
import { setCosts} from 'store/Costs/costs.actions';
import {setIncomes} from 'store/Incomes/income.action';
import {getFinData} from './hooks';
import {numberFormat} from 'utils';

import './Dashboard.scss';

/*
  Dashboard component which render all section
*/

class Dashboard extends Component {
  state = {
    incomeOpen: false,
    costOpen: true,
    budgetsOpen: false,
    pageName: 'Расходы',
    periodAmount: this.props.costsByPeriod
  }

  openCostHandler = () => {
    this.setState({
      costOpen: true,
      incomeOpen: false,
      budgetsOpen: false,
      pageName: 'Расходы',
      periodAmount: this.props.costsByPeriod
    })
  }

  openIncomeHandler = () => {
    this.setState({
      incomeOpen: true,
      costOpen: false,
      budgetsOpen: false,
      pageName: 'Доходы',
      periodAmount: this.props.incomesByPeriod
    })
  }

  openBudgetsHandler = () => {
    this.setState({
      incomeOpen: false,
      costOpen: false,
      budgetsOpen: true,
      pageName: 'Счета',
      periodAmount: this.props.incomesByPeriod - this.props.costsByPeriod
    })
  }

  async componentDidMount() {
    const token = await this.props.getToken();
    this.props.getSettings();

    if (!token) {
      this.props.history.push('/')
      return null;
    }
    const {costs, incomes, budget} = await getFinData(token, this.props.period);
    this.props.setCosts(costs);
    this.props.setBudget(budget);
    this.props.setIncomes(incomes);
  }

  async componentDidUpdate() {
    const token = this.props.getToken();
    this.props.getSettings();

    if (!token) {
      this.props.history.push('/');
      return null;
    }
    const {costs, incomes, budget} = await getFinData(token, this.props.period);
    this.props.setCosts(costs);
    this.props.setBudget(budget);
    this.props.setIncomes(incomes);
  }

  logOut = () => {
    this.props.logOut()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="flexbox">
        <Header logOut={this.logOut} pageName={this.state.pageName} periodAmount={numberFormat(this.state.periodAmount)} />
        <main className="main_box">
          <aside className="main_box__menu">
            <LeftMenu 
              incomeOpen={this.state.incomeOpen} 
              costOpen={this.state.costOpen}
              budgetsOpen={this.state.budgetsOpen}
              openCostHandler={this.openCostHandler}
              openIncomeHandler={this.openIncomeHandler}
              openBudgetsHandler={this.openBudgetsHandler}
              balance={numberFormat(this.props.balance) || 0}
              currancy={this.props.currancy}
            />
          </aside>
          <section className="main_box__info">
            <MyFinance
              incomeOpen={this.state.incomeOpen} 
              costOpen={this.state.costOpen}
              budgetsOpen={this.state.budgetsOpen}
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
    costsByPeriod: state.costs.costsByPeriod,
    incomesByPeriod: state.income.incomesByPeriod,
    period: state.user.month,
    balance: state.user.balance,
    currancy: state.user.settings.currency
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getToken: () => dispatch(getToken()),
    getSettings: () => dispatch(getSettings()),
    logOut: () => dispatch(logOut()),
    setCosts: (costs) => dispatch(setCosts(costs)),
    setBudget: (budget) => dispatch(setBudget(budget)),
    setIncomes: (incomes) => dispatch(setIncomes(incomes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
