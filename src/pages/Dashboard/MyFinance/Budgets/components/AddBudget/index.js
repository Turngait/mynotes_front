import React from 'react';

import PopUp from 'components/PopUp/PopUp';
import Input from 'components/Input2/Input2';
import Button from 'components/ButtonPopUp/ButtonPopUp';

import {saveBudget} from '../../../../hooks';

import './index.scss';

const AddBudget = props => {
  const [title, setTitle] = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const [error, setError] = React.useState('');

  async function addBudget () {
    const isAdd = await saveBudget({title, balance, created_at: new Date()}, props.token, props.setBudget, setError);
    if(isAdd) props.setIsAddBudgetOpen(false);
  }

  return (
    <PopUp>
      <i onClick={() => props.setIsAddBudgetOpen(false)} className="fas fa-times close"></i>
      <h3 className="addBudget_header">Добавить счет</h3>
      <span className="errorsMsg">{error}</span>
      <div className="addBudget_box">
        <Input onChange={(event) => setTitle(event.target.value)} placeholder={"Наименование счета"}/>
        <Input onChange={(event) => setBalance(event.target.value)} placeholder={"Начальный баланс"}/>
        <Button title={'Добавить'} onClick={addBudget}/>
      </div>
    </PopUp>
  )
}

export default AddBudget;
