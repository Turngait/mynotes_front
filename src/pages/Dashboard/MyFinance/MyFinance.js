import React from 'react';

import Costs from './Costs/Costs';
import Incomes from './Incomes/Incomes';
import Budgets from './Budgets';
import MyData from './MyData';

import './MyFinance.scss';

const MyFinance = props => 
  <> 
    { props.dataOpen ? <MyData isLoading={props.isLoading} total={props.periodAmount} getFinDataByPeriod={props.getFinDataByPeriod}/> : null }
    { props.costOpen ? <Costs isLoading={props.isLoading} periodAmount={props.periodAmount} getFinDataByPeriod={props.getFinDataByPeriod}/> : null }
    { props.incomeOpen ? <Incomes isLoading={props.isLoading} periodAmount={props.periodAmount} getFinDataByPeriod={props.getFinDataByPeriod}/> : null } 
    { props.budgetsOpen ? <Budgets isLoading={props.isLoading} total={props.periodAmount} /> : null }
  </>

export default MyFinance;
