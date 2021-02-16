import React from 'react';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';

import Button from 'components/Button1/Button1';
import BudgetsBox from './components/BudgetsBox';
import AddBudget from './components/AddBudget';
import EditBudget from './components/EditBudget';

import {setBudget} from 'store/User/user.actions';

import './index.scss';

const Budgets = props => {
  const { t } = useTranslation();
  const [isAddBudgetOpen, setIsAddBudgetOpen] = React.useState(false);
  const [isEditBudgetOpen, setIsEditBudgetOpen] = React.useState(false);
  const [editableItem, setEditableItem] = React.useState(null);
  const [error, setError] = React.useState('');

  return (
    <div className="budgets">
      {isAddBudgetOpen ? <AddBudget setIsAddBudgetOpen={setIsAddBudgetOpen} setBudget={props.setBudget} token={props.token}/> : null}
      {isEditBudgetOpen ? <EditBudget token={props.token} setBudget={props.setBudget} editableItem={editableItem} setIsEditBudgetOpen={setIsEditBudgetOpen}/> : null}
      <div className="budgets_headerBox">
        <div>
        </div>
        <div className="budgets_headerBox__btnBox">
          <Button onClick={() => setIsAddBudgetOpen(true)} title={t('budgets.addBudget')} />
        </div>
      </div>
      {error.length > 0 ? <p className="budgets__error">{error}</p> : null}
      <BudgetsBox 
        setIsEditBudgetOpen={setIsEditBudgetOpen} 
        setEditableItem={setEditableItem} 
        budget={props.budget} 
        currancy={props.currancy}
        token={props.token}
        setError={setError}
        setBudget={props.setBudget}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    budget: state.user.budgets,
    currancy: state.user.settings.currency,
    token: state.user.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setBudget: (data) => dispatch(setBudget(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budgets);
