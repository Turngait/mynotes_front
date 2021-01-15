import React from 'react';
import {connect} from 'react-redux';

import './Statistics.scss';

const Statistics = props => {
  const total = props.incomes - props.costs;

  return (
    <div className="stat_box">
      <h3 className="stat_box__header">Статистика в этом месяце</h3>
      <p className="stat_box__item">Потрачено: {props.currency} {props.costs}</p>
      <p className="stat_box__item">Получено: {props.currency} {props.incomes}</p>
      <p className="stat_box__item">Разница: {props.currency} {total}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    balance: state.user.balance,
    costs: state.costs.costsByPeriod,
    incomes: state.income.incomesByPeriod,
    currency: state.user.settings.currency
  }
}

export default connect(mapStateToProps)(Statistics);
