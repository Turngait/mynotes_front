import React from 'react';
import './Statistics.scss';
import {connect} from 'react-redux'; 

const Statistics = props => {
  const total = props.incomes - props.costs;
  return (
    <div className="stat_box">
      <h3 className="stat_box__header">Статистика</h3>
      <p className="stat_box__item">Потрачено: RUR {props.costs}</p>
      <p className="stat_box__item">Получено: RUR {props.incomes}</p>
      <p className="stat_box__item">Разница: RUR {total}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    costs: state.costs.costsByPeriod,
    incomes: state.income.incomesByPeriod
  }
}

export default connect(mapStateToProps)(Statistics);
