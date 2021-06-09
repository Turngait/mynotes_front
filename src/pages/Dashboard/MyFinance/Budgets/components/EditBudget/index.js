import React from 'react';

import PopUp from 'components/PopUp/PopUp';
import Input from 'components/Input2/Input2';
import Button from 'components/ButtonPopUp/ButtonPopUp';

import './index.scss';

const EditBudget = props => {
  const [title, setTitle] = React.useState(props.editableItem.title || '');
  const [balance, setBalance] = React.useState(props.editableItem.balance || 0);
  const [error, setError] = React.useState('');


  async function editBudget() {
    const isEdit = await props.editBudgetService({title, balance, _id: props.editableItem._id}, props.token, props.setBudget, setError);
    if(isEdit) {
      props.setIsEditBudgetOpen(false);
    };
  }

  return (
    <PopUp>
      <i onClick={() => props.setIsEditBudgetOpen(false)} className="fas fa-times close"></i>
      <h3 className="addBudget_header">Редактировать счет</h3>
      <span className="errorsMsg">{error}</span>
      <div className="addBudget_box">
        <Input onChange={(event) => setTitle(event.target.value)} value={title} placeholder={"Наименование счета"}/>
        <Input onChange={(event) => setBalance(event.target.value)} value={balance} placeholder={"Начальный баланс"}/>
        <Button onClick={editBudget} title={'Сохранить'}/>
      </div>
    </PopUp>
  )
}

export default EditBudget;

