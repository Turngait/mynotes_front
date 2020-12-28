import React from 'react';

import Costs from './Costs/Costs';
import Incomes from './Incomes/Incomes';
import Budgets from './Budgets';

import './MyFinance.scss';

const MyFinance = props => <> { props.costOpen ? <Costs/> : null } { props.incomeOpen ? <Incomes/> : null} {props.budgetsOpen ? <Budgets /> : null}</>

export default MyFinance;
