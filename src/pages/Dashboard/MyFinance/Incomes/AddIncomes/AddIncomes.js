import React from 'react';
import { connect } from 'react-redux';
import './AddIncomes.scss';
import PopUp from '../../../../../components/PopUp/PopUp';
import Input2 from '../../../../../components/Input2/Input2';
import ButtonPopUp from '../../../../../components/ButtonPopUp/ButtonPopUp';
import Textarea1 from '../../../../../components/Textarea1/Textarea1';
import {closeAddIncome, setIncomeTitle, setIncomeAmmount, setIncomeDescription, setIncomeDate, addIncomeItem} from '../../../../../store/Incomes/income.action';

const AddIncome = props => {
  return (
    <PopUp>
      <i onClick={props.closeAddIncome} className="fas fa-times close"></i>
      <h3 className="add_wlist__header">Add Incomes</h3>
      {
        props.addIncomeError ?
          <span className="errorsMsg">{props.addIncomeError}</span>
          : 
          null
      }
      <form className="add_wlist_item_box">
        <Input2 onChange={(event) => props.setIncomeDate(event.target.value)} value={props.income.date} type="date" name="date"/>
        <Input2 onChange={(event) => props.setIncomeTitle(event.target.value)} type="text" name="title" placeholder="Title of cost..."/>
        <Input2 onChange={(event) => props.setIncomeAmmount(event.target.value)} type="text" name="amount" placeholder="Amount of cost..."/>
        <Textarea1 onChange={(event) => props.setIncomeDescription(event.target.value)} name="description" placeholder="Description to cost.."></Textarea1>
        <ButtonPopUp onClick={() => props.addIncomeItem({income: props.income, token: props.token})} title="Add" />
      </form>
    </PopUp>
  )
}

function mapStateToProps (state) {
  return {
    income: state.income.income,
    token: state.user.token,
    addIncomeError: state.income.addIncomeError
  }
}

function mapDispatchToProps (dispatch) {
  return {
    closeAddIncome: () => dispatch(closeAddIncome()),
    setIncomeTitle: (data) => dispatch(setIncomeTitle(data)),
    setIncomeAmmount: (data) => dispatch(setIncomeAmmount(data)),
    setIncomeDescription: (data) => dispatch(setIncomeDescription(data)),
    setIncomeDate: (data) => dispatch(setIncomeDate(data)),
    addIncomeItem: (data) => dispatch(addIncomeItem(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddIncome);
