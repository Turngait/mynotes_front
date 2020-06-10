import React from 'react';
import './Incomes.scss';
import Heading1 from '../../../../components/Heading1/Heading1';
import Button from '../../../../components/Button1/Button1';
import Input2 from '../../../../components/Input2/Input2';
import IncomeBox from './IncomeBox/IncomeBox';
import AddIncome from './AddIncomes/AddIncomes';
import {connect} from 'react-redux';
import {openAddIncome, getIncomeForPeriod} from '../../../../store/Incomes/income.action';


const Incomes = props => {
  return (
    <>
      {
        props.addIncomeOpen
        ?
          <AddIncome />
        :
          null
      }
      <div className="myFin_headerBox">
        <Heading1 title="MyFinance: Incomes" />
        <div>
            <Input2 onChange={(event) => props.getIncomeForPeriod({period:event.target.value, token: props.token})} value={props.incomePeriod} type="month" name="date"/>
          </div>
          <div>
            <Button onClick={props.openAddIncome} title="Add Income" />
          </div>
      </div>
      {
        props.incomeItems ?
        props.incomeItems.map((income, key) => {
          return (
            <IncomeBox {...income} key={key} />
          )
        })
        :
          null
      }
    </>
  );
};

function mapStateToprops(state) {
  return {
    addIncomeOpen: state.income.addIncomeOpen,
    incomePeriod: state.income.incomePeriod,
    incomeItems: state.income.incomes,
    token: state.user.token
  }
}

function mapDispatchToprops (dispatch) {
  return {
    openAddIncome: () => dispatch(openAddIncome()),
    getIncomeForPeriod: (data) => dispatch(getIncomeForPeriod(data))
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Incomes);
