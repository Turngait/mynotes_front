import React from 'react';
import {connect} from 'react-redux';

import {deleteIncome} from 'store/Incomes/income.action';
import {numberFormat} from 'utils';

import './IncomeItem.scss';

const IncomeItem = props => {
  const source_name = showSourceName({id_source: props.id_source, sourses:props.sourses});

  return (
    <div className="IncomeItem">
      <div className="IncomeItem_header">
        <span className="IncomeItem_header__info">{props.title}</span>
        <span className="IncomeItem_header__info"><b>Источник:</b> {source_name}</span>
        <span className="IncomeItem_header__control">
          <span className="IncomeItem_header__info">{numberFormat(props.amount)} {props.currency}</span>
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
    sourses: state.income.sources,
    currency: state.user.settings.currency
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteIncome: (data) => dispatch(deleteIncome(data)),
  }
}

function showSourceName(data) {
  const {id_source} = data;
  if (data.sourses) {
    for(let source of data.sourses) {
      if (source._id === id_source) {
        return source.title
      }
    }
  }

  return 'None'
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeItem);
