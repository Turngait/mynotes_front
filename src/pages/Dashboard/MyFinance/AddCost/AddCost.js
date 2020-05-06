import React from 'react';
import { connect } from 'react-redux';
import './AddCost.scss';
import PopUp from '../../../../components/PopUp/PopUp';
import Input2 from '../../../../components/Input2/Input2';
import ButtonPopUp from '../../../../components/ButtonPopUp/ButtonPopUp';
import {closeAddCost, addCostItem, setCostTitle, setCostAmmount, setCostDescription, setCostGroup, setCostWlistItem, setCostDate} from '../../../../store/Finance/finance.actions'

const AddCost = props => {
  return (
    <PopUp>
      <i onClick={props.closeAddCost} className="fas fa-times close"></i>
      <h3 className="add_wlist__header">Add Cost</h3>
      {
        props.errorMsg ?
          <span className="errorsMsg">{props.errorMsg}</span>
          : 
          null
      }
      <form className="add_wlist_item_box">
        <Input2 onChange={(event) => props.setCostDate(event.target.value)} value={props.cost.date} type="date" name="date"/>
        <Input2 onChange={(event) => props.setCostTitle(event.target.value)} type="text" name="title" placeholder="Title of cost..."/>
        <Input2 onChange={(event) => props.setCostAmmount(event.target.value)} type="text" name="amount" placeholder="Amount of cost..."/>
        <textarea onChange={(event) => props.setCostDescription(event.target.value)} className="add_wlist_item_box__txtarea" name="description" placeholder="Description to cost.."></textarea>
        <div className="add_wlist_item_box__opt">
          <select onChange={(event) => props.setCostGroup(event.target.value)} className="add_wlist_item_box__opt_sel">
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
          </select>
          <select onChange={(event) => {props.setCostWlistItem(event.target.value)}} className="add_wlist_item_box__opt_sel">
            <option value="0">None</option>
            {
              props.wlist.length > 0 ?
              props.wlist.map((item, key) => {
                return (
                  <option key={key} value={item._id}>{item.name}</option>
                )
              })
              :
              null
            }
          </select>
        </div>

        <ButtonPopUp onClick={() => props.addCostItem({cost: props.cost, token: props.token})} title="Add" />
      </form>
    </PopUp>
  )
}

function mapStateToProps (state) {
  return {
    cost: state.finance.cost,
    groups: state.finance.groups,
    wlist: state.wlist.wlist,
    token: state.user.token,
    errorMsg: state.finance.addCostError
  }
}

function mapDispatchToProps (dispatch) {
  return {
    closeAddCost: () => dispatch(closeAddCost()),
    addCostItem: (data) => dispatch(addCostItem(data)),
    setCostTitle: (title) => dispatch(setCostTitle(title)),
    setCostAmmount: (amount) => dispatch(setCostAmmount(amount)),
    setCostDescription: (description) => dispatch(setCostDescription(description)),
    setCostGroup: (data) => dispatch(setCostGroup(data)),
    setCostWlistItem: (data) => dispatch(setCostWlistItem(data)),
    setCostDate: (data) => dispatch(setCostDate(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCost);
