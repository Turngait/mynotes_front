import React from 'react';

import Costs from './Costs/Costs';
import Incomes from './Incomes/Incomes';
import Budgets from './Budgets';

import './MyFinance.scss';

const MyFinance = props => 
  <> 
    { props.costOpen ? <Costs isLoading={props.isLoading} periodAmount={props.periodAmount}/> : null } 
    { props.incomeOpen ? <Incomes isLoading={props.isLoading} periodAmount={props.periodAmount} /> : null } 
    { props.budgetsOpen ? <Budgets isLoading={props.isLoading} total={props.periodAmount} /> : null }
  </>

export default MyFinance;
