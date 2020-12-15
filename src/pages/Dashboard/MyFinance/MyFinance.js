import React from 'react';

import Costs from './Costs/Costs';
import Incomes from './Incomes/Incomes';

import './MyFinance.scss';

const MyFinance = props => <> { props.costOpen ? <Costs/> : null } { props.incomeOpen ? <Incomes/> : null}</>

export default MyFinance;
