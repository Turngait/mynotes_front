import React from 'react';

import {numberFormat} from 'utils';

import './index.scss';

const BudgetsBox = props => {
  return (
    <div className="budgetBox">
          {
            props.budget.length > 0 ?
            props.budget.map((budget) => {
              return (
                <div className="budgetBox__stat" key={budget._id}>
                  <p className="budgetBox__stat__header">Счет: {budget.title}</p>
                  <p className="budgetBox__stat__info">Баланс: {numberFormat(budget.balance)} {props.currancy}</p>
                </div>
              )
            })
            : null
          }
    </div>
  )
}

export default BudgetsBox;
