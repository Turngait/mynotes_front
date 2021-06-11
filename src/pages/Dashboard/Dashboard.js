import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from 'components/Header/Header';

import LeftMenu from './LeftMenu/LeftMenu';
import MyFinance from './MyFinance/MyFinance';

import { getToken, getSettings, logOut, setBudget } from 'store/User/user.actions';
import { setCosts } from 'store/Costs/costs.actions';
import { setIncomes } from 'store/Incomes/income.action';
import { getFinData } from './services';
import { numberFormat } from 'utils';

import './Dashboard.scss';

/*
  Dashboard component which render all section
*/

const Dashboard = (props) => {
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [costOpen, setCostOpen] = useState(true);
  const [budgetsOpen, setBudgetsOpen] = useState(false);
  const [periodAmount, setPeriodAmount] = useState(props.costsByPeriod);
  const [isLoading, setIsLoading] = useState(true);

  const openCostHandler = () => {
    setIncomeOpen(false);
    setCostOpen(true);
    setBudgetsOpen(false);
    setPeriodAmount(props.costsByPeriod);
  }

  const openIncomeHandler = () => {
    setIncomeOpen(true);
    setCostOpen(false);
    setBudgetsOpen(false);
    setPeriodAmount(props.incomesByPeriod);
  }

  const openBudgetsHandler = () => {
    setIncomeOpen(false);
    setCostOpen(false);
    setBudgetsOpen(true);
    setPeriodAmount(props.incomesByPeriod - props.costsByPeriod);
  }
  useEffect(() => {
    async function getData () {
      const token = await props.getToken();
      props.getSettings();
  
      if (!token) {
        props.history.push('/')
        return null;
      }
      
      const {costs, incomes, budget} = await getFinData(token, props.period);
      props.setCosts(costs);
      props.setBudget(budget);
      props.setIncomes(incomes);
  
      let spentByThisMonth = 0;
      if (costs.costs.length > 0) spentByThisMonth = costs.costs[costs.costs.length - 1].spentByThisMonth;
      setPeriodAmount(spentByThisMonth);
      setIsLoading(false);
    }

    getData();
  }, []);

  const logOut = () => {
    props.logOut()
    props.history.push('/')
  }

  return (
    <div className="flexbox">
      <Header logOut={logOut} />
      <main className="main_box">
        <aside className="main_box__menu">
          <LeftMenu 
            incomeOpen={incomeOpen} 
            costOpen={costOpen}
            budgetsOpen={budgetsOpen}
            openCostHandler={openCostHandler}
            openIncomeHandler={openIncomeHandler}
            openBudgetsHandler={openBudgetsHandler}
            balance={numberFormat(props.balance) || 0}
            currancy={props.currancy}
          />
        </aside>
        <section className="main_box__info">
          <MyFinance
            periodAmount={numberFormat(periodAmount)}
            incomeOpen={incomeOpen} 
            costOpen={costOpen}
            budgetsOpen={budgetsOpen}
            isLoading={isLoading}
          />
        </section>
      </main>
     </div>
   )
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
