import React from 'react';
import { useTranslation } from 'react-i18next';

import {numberFormat} from 'utils';

import './index.scss';

const BudgetsBox = props => {
  const { t } = useTranslation();

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
                      onClick={(event) => props.deleteBudgetService(event.target.dataset.itemId, props.token, props.setBudget, props.setError)}
                      data-item-id={budget._id} 
                      className="fas controlBudgetItem fa-times-circle">
                    </i>
                  </div>
                  <p className="budgetBox__stat__header">{t('budgets.budget')}: {budget.title}</p>
                  <p className="budgetBox__stat__info">{t('budgets.balance')}: {numberFormat(budget.balance)} {props.currancy}</p>
                </div>
              )
            })
            : null
          }
    </div>
  )
}

export default BudgetsBox;
