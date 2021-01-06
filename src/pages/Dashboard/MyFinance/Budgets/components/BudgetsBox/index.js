import React from 'react';

import {numberFormat} from 'utils';

import './index.scss';

const BudgetsBox = props => {
  function editBudget (itemId) {
    const item = props.budget.filter(budget => budget._id.toString() === itemId);
    props.setIsEditBudgetOpen(true);
    props.setEditableItem(item[0]);
  }

  return (
    <div className="budgetBox">
          {
            props.budget.length > 0 ?
            props.budget.map((budget) => {
              return (
                <div className="budgetBox__stat" key={budget._id}>
                  <div className="budgetBox__stat__controll">
                    <i 
                      onClick={(event) => editBudget(event.target.dataset.itemId)} 
                      data-item-id={budget._id} 
                      className="fas controlBudgetItem fa-pen">
                    </i>
                    <i 
                      // onClick={(event) => props.deleteCostItem({target: event.target, token: props.token})}
                      data-item-id={budget._id} 
                      className="fas controlBudgetItem fa-times-circle">
                    </i>
                  </div>
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
