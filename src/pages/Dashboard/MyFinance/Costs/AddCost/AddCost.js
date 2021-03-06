import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PopUp from '../../../../../components/PopUp/PopUp';
import Input2 from '../../../../../components/Input2/Input2';
import ButtonPopUp from '../../../../../components/ButtonPopUp/ButtonPopUp';
import Select1 from '../../../../../components/Select1/Select1';
import Textarea1 from '../../../../../components/Textarea1/Textarea1';

import {setCosts} from 'store/Costs/costs.actions'

import './AddCost.scss';

const AddCost = props => {
  const { t } = useTranslation();
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [group, setGroup] = React.useState(props.groups[0]._id);
  const [budget, setBudget] = React.useState(props.budgets[0]._id);
  const [date, setDate] = React.useState(new Date().toISOString().slice(0,10));
  const [error, setError] = React.useState('');

  async function addCost() {
    const isAdd = await props.saveCost({title, amount, description, group, budget, date}, props.token, props.setCosts, setError);
    if(isAdd) {
      props.setIsAddCostOpen(false);
    } 
  }

  return (
    <PopUp>
      <i onClick={() => props.setIsAddCostOpen(false)} className="fas fa-times close"></i>
      <h3 className="addItem_header">{t('costs.addCost')}</h3>
      <span className="errorsMsg">{error}</span>
      <form className="addItem_box">
        <Input2 onChange={(event) => setDate(event.target.value)} value={date} type="date" name="date"/>
        <Input2 onChange={(event) => setTitle(event.target.value)} type="text" name="title" placeholder={t('costs.titleofCost') + '...'}/>
        <Input2 onChange={(event) => setAmount(event.target.value)} type="text" name="amount" placeholder={t('costs.amount') + "..."}/>
        <Textarea1 onChange={(event) => setDescription(event.target.value)} name="description" placeholder={t('costs.description') + "..."}></Textarea1>
        <div className="add_item_box__opt">
          <div className="add_item_box__opt__group">
            <Select1 onChange={(event) => setGroup(event.target.value)}>
              {
                props.groups.length > 0 ?
                props.groups.map((group, key) => {
                  return (
                    <option key={key} value={group._id}>{t('costs.group')}: {group.title}</option>
                  )
                })
                : 
                null
              }
            </Select1>
            <button onClick={() => props.openAddGroup(true)} type="button" className="add_item_box__opt__group__openAddGroup">+</button>
          </div>
          <Select1 onChange={(event) => setBudget(event.target.value)}>
            {
              props.budgets.map((budget, key) => {
                return (
                  <option key={key} value={budget._id}>{t('costs.budget')}: {budget.title}</option>
                )
              })
            }
          </Select1>
        </div>

        <ButtonPopUp onClick={addCost} title={t('costs.addBtn')} />
      </form>
    </PopUp>
  )
}

function mapStateToProps (state) {
  return {
    groups: state.costs.groups,
    token: state.user.token,
    budgets: state.user.budgets
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setCosts: (costs) => dispatch(setCosts(costs))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCost);
