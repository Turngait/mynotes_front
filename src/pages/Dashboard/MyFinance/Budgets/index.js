import React from 'react';
// import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';

import Loader from 'components/Loader';

import BudgetsBox from './components/BudgetsBox';
import AddBudget from './components/AddBudget';
import EditBudget from './components/EditBudget';

import {setBudget} from 'store/User/user.actions';
import {saveBudget, editBudgetService, deleteBudgetService} from './services';

import './index.scss';

const Budgets = props => {
  // const { t } = useTranslation();
  const [isAddBudgetOpen, setIsAddBudgetOpen] = React.useState(false);
  const [isEditBudgetOpen, setIsEditBudgetOpen] = React.useState(false);
  const [editableItem, setEditableItem] = React.useState(null);
  const [error, setError] = React.useState('');

  return (
    <div className="budgets">
      {props.isLoading ? <Loader /> : (
        <>
          {isAddBudgetOpen ? <AddBudget saveBudget={saveBudget} setIsAddBudgetOpen={setIsAddBudgetOpen} setBudget={props.setBudget} token={props.token}/> : null}
          {isEditBudgetOpen ? <EditBudget editBudgetService={editBudgetService} token={props.token} setBudget={props.setBudget} editableItem={editableItem} setIsEditBudgetOpen={setIsEditBudgetOpen}/> : null}
          {error.length > 0 ? <p className="budgets__error">{error}</p> : null}
          <BudgetsBox
            deleteBudgetService={deleteBudgetService}
            setIsEditBudgetOpen={setIsEditBudgetOpen} 
            setEditableItem={setEditableItem} 
            budget={props.budget} 
            currancy={props.currency}
            token={props.token}
            setError={setError}
            setBudget={props.setBudget}
          />
          <button onClick={setIsAddBudgetOpen} className="budgets__openAddCostBtn">+</button>
        </>
      )}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    budget: state.user.budgets,
    currency: state.user.settings.currency,
    token: state.user.token,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setBudget: (data) => dispatch(setBudget(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Budgets);
