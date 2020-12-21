import React from 'react';
import {connect} from 'react-redux';

import {deleteIncome} from '../../../../../../store/Incomes/income.action';

import './IncomeItem.scss';

const IncomeItem = props => {
  return (
    <div className="IncomeItem">
      <div className="IncomeItem_header">
        <span className="IncomeItem_header__info">{props.currency} {props.amount}</span>
        <span className="IncomeItem_header__info">{props.title}</span>
        <span className="IncomeItem_header__control">
          <i 
            onClick={(event) => props.deleteIncome({target: event.target, token: props.token})} 
            data-item-id={props._id} 
            className="fas deleteCostItem fa-times-circle">
          </i>
        </span>
      </div>
      {
        props.description ?
          <p className="IncomeItem_text">{props.description}</p>
        :
          null
      }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    token: state.user.token,
    currency: state.user.settings.currency
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteIncome: (data) => dispatch(deleteIncome(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeItem);
