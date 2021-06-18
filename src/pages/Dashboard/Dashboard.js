import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from 'components/Header/Header';

import LeftMenu from './LeftMenu/LeftMenu';
import MyFinance from './MyFinance/MyFinance';

import { getToken, getSettings, logOut, setBudget, setPeriod } from 'store/User/user.actions';
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
  const [costOpen, setCostOpen] = useState(false);
  const [budgetsOpen, setBudgetsOpen] = useState(false);
  const [dataOpen, setDataOpen] = useState(true);
  const [periodAmount, setPeriodAmount] = useState(props.costsByPeriod);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  const openCostHandler = () => {
    setIncomeOpen(false);
    setCostOpen(true);
    setBudgetsOpen(false);
    setDataOpen(false);
    setPeriodAmount(props.costsByPeriod);
  }

  const openIncomeHandler = () => {
    setIncomeOpen(true);
    setCostOpen(false);
    setBudgetsOpen(false);
    setDataOpen(false);
    setPeriodAmount(props.incomesByPeriod);
  }

  const openBudgetsHandler = () => {
    setIncomeOpen(false);
    setCostOpen(false);
    setBudgetsOpen(true);
    setDataOpen(false);
    setPeriodAmount(props.incomesByPeriod - props.costsByPeriod);
  }
  const openDataHandler = () => {
    setIncomeOpen(false);
    setCostOpen(false);
    setBudgetsOpen(false);
    setDataOpen(true);
    setPeriodAmount(props.incomesByPeriod - props.costsByPeriod);
  }

  const logOut = () => {
    props.logOut();
    props.history.push('/');
  }

  const getDataForPeriod = async (period) => {
    setIsLoading(true);

    const {costs, incomes, budget, status} = await getFinData(token, period);
    if (status === 403 || status === 400 || status === 500) {
      // TODO Переделать в будущем логику в зависимости от статуса
      logOut();
    } else {
      props.setCosts(costs);
      props.setBudget(budget);
      props.setIncomes(incomes);
      let spentByThisMonth = 0;
      if (costs.costs.length > 0) spentByThisMonth = costs.costs[costs.costs.length - 1].spentByThisMonth;
      setPeriodAmount(spentByThisMonth);
      props.setPeriod(period);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function getData () {
      const tokenFromLS = await props.getToken();
      props.getSettings();
  
      if (!tokenFromLS) {
        props.history.push('/');
        return null;
      }
      setToken(tokenFromLS);
      
      const {costs, incomes, budget, status} = await getFinData(tokenFromLS, props.period);
      // TODO Переделать в будущем логику в зависимости от статуса
      if (status === 403 || status === 400 || status === 500) {
        logOut();
      } else {
        props.setCosts(costs);
        props.setBudget(budget);
        props.setIncomes(incomes);
    
        let spentByThisMonth = 0;
        if (costs.costs.length > 0) spentByThisMonth = costs.costs[costs.costs.length - 1].spentByThisMonth;
        setPeriodAmount(spentByThisMonth);
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="flexbox">
      <Header logOut={logOut} />
      <main className="main_box">
        <aside className="main_box__menu">
          <LeftMenu 
            incomeOpen={incomeOpen} 
            costOpen={costOpen}
            budgetsOpen={budgetsOpen}
            dataOpen={dataOpen}
            openCostHandler={openCostHandler}
            openIncomeHandler={openIncomeHandler}
            openBudgetsHandler={openBudgetsHandler}
            openDataHandler={openDataHandler}
            balance={numberFormat(props.balance) || 0}
            currancy={props.currancy}
          />
        </aside>
        <section className="main_box__info">
          <MyFinance
            getFinDataByPeriod={getDataForPeriod}
            periodAmount={numberFormat(periodAmount)}
            incomeOpen={incomeOpen} 
            costOpen={costOpen}
            budgetsOpen={budgetsOpen}
            dataOpen={dataOpen}
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
    setIncomes: (incomes) => dispatch(setIncomes(incomes)),
    setPeriod: (period) => dispatch(setPeriod(period))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
