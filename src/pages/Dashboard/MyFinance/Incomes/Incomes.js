import React from 'react';
import './Incomes.scss';
import Heading1 from '../../../../components/Heading1/Heading1';
import Button from '../../../../components/Button1/Button1';
import Input2 from '../../../../components/Input2/Input2';
import IncomeBox from './IncomeBox/IncomeBox';
import AddIncome from './AddIncomes/AddIncomes';
import {connect} from 'react-redux';
import {openAddIncome} from '../../../../store/Incomes/income.action';


const Incomes = props => {
  console.log(props)
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
            <Input2 value={props.incomePeriod} type="month" name="date"/>
          </div>
          <div>
            <Button onClick={props.openAddIncome} title="Add Income" />
          </div>
      </div>
      {
        props.incomeItems ?
        props.incomeItems.map((income, key) => {
          return (
            <IncomeBox key={key} {...income} />
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
    incomeItems: state.income.incomes
  }
}

function mapDispatchToprops (dispatch) {
  return {
    openAddIncome: () => dispatch(openAddIncome())
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Incomes);
