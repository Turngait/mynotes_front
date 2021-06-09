import React from 'react';

import Costs from './Costs/Costs';
import Incomes from './Incomes/Incomes';
import Budgets from './Budgets';

import './MyFinance.scss';

const MyFinance = props => 
  <> 
    { props.costOpen ? <Costs periodAmount={props.periodAmount}/> : null } 
    { props.incomeOpen ? <Incomes periodAmount={props.periodAmount} /> : null } 
    { props.budgetsOpen ? <Budgets total={props.periodAmount} /> : null }
  </>

export default MyFinance;
