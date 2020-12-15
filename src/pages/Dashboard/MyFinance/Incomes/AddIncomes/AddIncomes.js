import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PopUp from '../../../../../components/PopUp/PopUp';
import Input2 from '../../../../../components/Input2/Input2';
import ButtonPopUp from '../../../../../components/ButtonPopUp/ButtonPopUp';
import Textarea1 from '../../../../../components/Textarea1/Textarea1';

import {setIncomeTitle, setIncomeAmmount, setIncomeDescription, setIncomeDate, addIncomeItem} from '../../../../../store/Incomes/income.action';

import './AddIncomes.scss';

const AddIncome = props => {
  const { t } = useTranslation();

  return (
    <PopUp>
      <i onClick={() => props.setIsAddIncomeOpen(false)} className="fas fa-times close"></i>
      <h3 className="addItem_header">Добавить доход</h3>
      {
        props.addIncomeError ?
          <span className="errorsMsg">{props.addIncomeError}</span>
          : 
          null
      }
      <form className="addItem_box">
        <Input2 onChange={(event) => props.setIncomeDate(event.target.value)} value={props.income.date} type="date" name="date"/>
        <Input2 onChange={(event) => props.setIncomeTitle(event.target.value)} type="text" name="title" placeholder={t('incomes.titleofIncome') + "..."}/>
        <Input2 onChange={(event) => props.setIncomeAmmount(event.target.value)} type="text" name="amount" placeholder={t('incomes.amount') + "..."}/>
        <Textarea1 onChange={(event) => props.setIncomeDescription(event.target.value)} name="description" placeholder={t('incomes.description') + "..."}></Textarea1>
        <ButtonPopUp onClick={() => props.addIncomeItem({income: props.income, token: props.token})} title={t('incomes.addBtn')} />
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
    setIncomeTitle: (data) => dispatch(setIncomeTitle(data)),
    setIncomeAmmount: (data) => dispatch(setIncomeAmmount(data)),
    setIncomeDescription: (data) => dispatch(setIncomeDescription(data)),
    setIncomeDate: (data) => dispatch(setIncomeDate(data)),
    addIncomeItem: (data) => dispatch(addIncomeItem(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddIncome);
