import React from 'react';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';

import Button from '../../../../components/Button1/Button1';
import BudgetsBox from './components/BudgetsBox';
import AddBudget from './components/AddBudget';

import './index.scss';

const Budgets = props => {
  const { t } = useTranslation();
  const [isAddBudgetOpen, setIsAddBudgetOpen] = React.useState(false);
  return (
    <div className="budgets">
      {isAddBudgetOpen ? <AddBudget setIsAddBudgetOpen={setIsAddBudgetOpen}/> : null}
      <div className="budgets_headerBox">
        <div>
        </div>
        <div className="budgets_headerBox__btnBox">
          <Button onClick={() => setIsAddBudgetOpen(true)} title={t('budgets.addBudget')} />
        </div>
      </div>
      <BudgetsBox budget={props.budget} currancy={props.currancy}/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    budget: state.user.budgets,
    currancy: state.user.settings.currency
  }
}

export default connect(mapStateToProps, null)(Budgets);
