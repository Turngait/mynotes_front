import React from 'react';

import PopUp from '../../../../../../components/PopUp/PopUp';
import Input from '../../../../../../components/Input2/Input2';
import Button from '../../../../../../components/ButtonPopUp/ButtonPopUp';

import './index.scss';

const AddBudget = props => {
  const [title, setTitle] = React.useState('');
  return (
    <PopUp>
      <i onClick={() => props.setIsAddBudgetOpen(false)} className="fas fa-times close"></i>
      <h3 className="addBudget_header">Добавить счет</h3>
      <div className="addBudget_box">
        <Input onChange={(event) => setTitle(event.target.value)} placeholder={"Наименование счета"}/>
        <Button title={'Добавить'}/>
      </div>
    </PopUp>
  )
}

export default AddBudget;
