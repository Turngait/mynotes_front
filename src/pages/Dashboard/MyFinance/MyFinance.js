import React from 'react';
import Costs from './Costs/Costs';
import Incomes from './Incomes/Incomes';
import {connect} from 'react-redux';
import './MyFinance.scss';

const MyFinance = props => {

  return (
    <>
      {
        props.isCostOpen 
        ? 
          <Costs/>
        :
          null
      }
      {
        props.isIncomesOpen 
        ? 
          <Incomes/>
        :
          null
      }
    </>
  );
}

function mapStateToProps(state) {
  return {
    isCostOpen: state.finance.isCostOpen,
    isIncomesOpen: state.finance.isIncomesOpen
  }
}

export default connect(mapStateToProps)(MyFinance);
