import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PopUp from 'components/PopUp/PopUp';
import Input2 from 'components/Input2/Input2';
import ButtonPopUp from 'components/ButtonPopUp/ButtonPopUp';
import Textarea1 from 'components/Textarea1/Textarea1';
import Select1 from 'components/Select1/Select1';

import {setIncomes} from 'store/Incomes/income.action';

import './AddIncomes.scss';

const AddIncome = props => {
  const { t } = useTranslation();
  const [date, setDate] = React.useState(new Date().toISOString().slice(0,10));
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [error, setError] = React.useState('');
  const [budget, setBudget] = React.useState(props.budgets[0]._id);
  const [source, setSource] = React.useState(props.sources[0]._id);

  async function addIncome() {
    const isAdd = await props.saveIncome({date, title, budget, source, amount, description}, props.token, props.setIncomes, setError);
    if(isAdd) {
      props.setIsAddIncomeOpen(false);
    } 
  }

  return (
    <PopUp>
      <i onClick={() => props.setIsAddIncomeOpen(false)} className="fas fa-times close"></i>
      <h3 className="addItem_header">{t('incomes.addIncome')}</h3>
      {error.length > 0 ? <span className="errorsMsg">{error}</span> : null}
      <form className="addItem_box">
        <Input2 onChange={(event) => setDate(event.target.value)} value={date} type="date" name="date"/>
        <Input2 onChange={(event) => setTitle(event.target.value)} type="text" name="title" placeholder={t('incomes.titleofIncome') + "..."}/>
        <Input2 onChange={(event) => setAmount(event.target.value)} type="text" name="amount" placeholder={t('incomes.amount') + "..."}/>
        <Textarea1 onChange={(event) => setDescription(event.target.value)} name="description" placeholder={t('incomes.description') + "..."}></Textarea1>
        <div className="add_item_box__opt">
          <div className="add_item_box__opt__group">
            <Select1 onChange={(event) => setSource(event.target.value)}>
              {
                props.sources.length > 0 ?
                props.sources.map((group, key) => {
                  return (
                    <option key={key} value={group._id}>{t('incomes.source')}: {group.title}</option>
                  )
                })
                : 
                null
              }
            </Select1>
            <button onClick={() => props.openAddSource(true)} type="button" className="add_item_box__opt__group__openAddGroup">+</button>
          </div>
          <Select1 onChange={(event) => setBudget(event.target.value)}>
            {
              props.budgets.map((budget, key) => {
                return (
                  <option key={key} value={budget._id}>{t('incomes.budget')}: {budget.title}</option>
                )
              })
            }
          </Select1>
        </div>
        <ButtonPopUp onClick={addIncome} title={t('incomes.addBtn')} />
      </form>
    </PopUp>
  )
}

function mapStateToProps (state) {
  return {
    token: state.user.token,
    sources: state.income.sources,
    budgets: state.user.budgets
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setIncomes: (data) => dispatch(setIncomes(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddIncome);
