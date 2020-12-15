import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PopUp from '../../../../../components/PopUp/PopUp';
import Input2 from '../../../../../components/Input2/Input2';
import ButtonPopUp from '../../../../../components/ButtonPopUp/ButtonPopUp';
import Select1 from '../../../../../components/Select1/Select1';
import Textarea1 from '../../../../../components/Textarea1/Textarea1';

import {addCostItem, setCostTitle, setCostAmmount, setCostDescription, setCostGroup, setCostDate} from '../../../../../store/Costs/costs.actions'

import './AddCost.scss';

const AddCost = props => {
  const { t } = useTranslation();

  return (
    <PopUp>
      <i onClick={() => props.setIsAddCostOpen(false)} className="fas fa-times close"></i>
      <h3 className="addItem_header">Добавить расход</h3>
      {
        props.errorMsg ?
          <span className="errorsMsg">{props.errorMsg}</span>
          : 
          null
      }
      <form className="addItem_box">
        <Input2 onChange={(event) => props.setCostDate(event.target.value)} value={props.cost.date} type="date" name="date"/>
        <Input2 onChange={(event) => props.setCostTitle(event.target.value)} type="text" name="title" placeholder={t('costs.titleofCost') + '...'}/>
        <Input2 onChange={(event) => props.setCostAmmount(event.target.value)} type="text" name="amount" placeholder={t('costs.amount') + "..."}/>
        <Textarea1 onChange={(event) => props.setCostDescription(event.target.value)} name="description" placeholder={t('costs.description') + "..."}></Textarea1>
        <div className="add_item_box__opt">
          <Select1 onChange={(event) => props.setCostGroup(event.target.value)}>
            <option value='none'>None</option>
            {
              props.groups.length > 0 ?
              props.groups.map((group, key) => {
                return (
                  <option key={key} value={group._id}>{group.title}</option>
                )
              })
              : 
              null
            }
            <option value='0'>Other</option>
          </Select1>
        </div>

        <ButtonPopUp onClick={() => props.addCostItem({cost: props.cost, token: props.token})} title={t('costs.addBtn')} />
      </form>
    </PopUp>
  )
}

function mapStateToProps (state) {
  return {
    cost: state.costs.cost,
    groups: state.costs.groups,
    token: state.user.token,
    errorMsg: state.costs.addCostError
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCostItem: (data) => dispatch(addCostItem(data)),
    setCostTitle: (title) => dispatch(setCostTitle(title)),
    setCostAmmount: (amount) => dispatch(setCostAmmount(amount)),
    setCostDescription: (description) => dispatch(setCostDescription(description)),
    setCostGroup: (data) => dispatch(setCostGroup(data)),
    setCostDate: (data) => dispatch(setCostDate(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCost);
