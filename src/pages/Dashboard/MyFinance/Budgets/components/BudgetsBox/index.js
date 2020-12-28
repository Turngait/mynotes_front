import React from 'react';

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
                  <p className="budgetBox__stat__info">Баланс: {budget.balance} {props.currancy}</p>
                </div>
              )
            })
            : null
          }
    </div>
  )
}

export default BudgetsBox;
