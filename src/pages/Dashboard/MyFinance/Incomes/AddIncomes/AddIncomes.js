import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PopUp from '../../../../../components/PopUp/PopUp';
import Input2 from '../../../../../components/Input2/Input2';
import ButtonPopUp from '../../../../../components/ButtonPopUp/ButtonPopUp';
import Textarea1 from '../../../../../components/Textarea1/Textarea1';

import {saveIncome} from './hooks';

import {getIncomes} from '../../../../../store/Incomes/income.action';

import './AddIncomes.scss';

const AddIncome = props => {
  const { t } = useTranslation();
  const [date, setDate] = React.useState(new Date().toISOString().slice(0,10));
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [error, setError] = React.useState('');

  async function addIncome() {
    const isAdd = await saveIncome({date, title, amount, description}, props.token, setError);
    if(isAdd) {
      props.setIsAddIncomeOpen(false);
      props.getIncomes(props.token);
    } 
  }

  return (
    <PopUp>
      <i onClick={() => props.setIsAddIncomeOpen(false)} className="fas fa-times close"></i>
      <h3 className="addItem_header">Добавить доход</h3>
      {error.length > 0 ? <span className="errorsMsg">{error}</span> : null}
      <form className="addItem_box">
        <Input2 onChange={(event) => setDate(event.target.value)} value={date} type="date" name="date"/>
        <Input2 onChange={(event) => setTitle(event.target.value)} type="text" name="title" placeholder={t('incomes.titleofIncome') + "..."}/>
        <Input2 onChange={(event) => setAmount(event.target.value)} type="text" name="amount" placeholder={t('incomes.amount') + "..."}/>
        <Textarea1 onChange={(event) => setDescription(event.target.value)} name="description" placeholder={t('incomes.description') + "..."}></Textarea1>
        <ButtonPopUp onClick={addIncome} title={t('incomes.addBtn')} />
      </form>
    </PopUp>
  )
}

function mapStateToProps (state) {
  return {
    token: state.user.token
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getIncomes: (token) => dispatch(getIncomes(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddIncome);
