import React from 'react'
import { connect } from 'react-redux'
import './AddItem.scss'
import PopUp from '../../../../components/PopUp/PopUp'
import {setName, setText, setLink, setPrice, setPriority, setWlistItem, setGroup} from '../../../../store/Wlist/wlist.actions'

const AddItem = props => {
  
  const {name, link, price, text, priority, group, token} = props
  const data = {
    name,
    link,
    price,
    text,
    priority,
    group,
    token
  }
  return (
    <PopUp>
      <i onClick={props.onClose} className="fas fa-times close"></i>
      <h3 className="add_wlist__header">Add Wishlist Item</h3>
      {
        props.errorMsg ?
          <span className="errorsMsg">{props.errorMsg}</span>
          : 
          null
      }
      <form className="add_wlist_item_box">
        <input onChange={(event) => props.setName(event.target.value)} className="add_wlist_item_box__input" type="text" name="name" placeholder="Item name..."/>
        <input onChange={(event) => props.setPrice(event.target.value)} className="add_wlist_item_box__input" type="text" name="price" placeholder="Item price..."/>
        <input onChange={(event) => props.setLink(event.target.value)} className="add_wlist_item_box__input" type="text" name="link" placeholder="Item link (if exist)..."/>
        <textarea onChange={(event) => props.setText(event.target.value)} className="add_wlist_item_box__txtarea" name="text" placeholder="Description...">
        </textarea>

        <div className="add_wlist_item_box__opt">
          
          <select defaultValue={props.group} onChange={(event) => props.setGroup(event.target.value)} className="add_wlist_item_box__opt_sel">
            <option value="Group1">MustHave</option>
            <option value="Group2">Group2</option>
          </select>

          <select onChange={(event) => props.setPriority(event.target.value)} defaultValue={props.priority} className="add_wlist_item_box__opt_sel">
            <option value="1">Priority 1</option>
            <option value="2">Priority 2</option>
            <option value="3">Priority 3</option>
            <option value="4">Priority 4</option>
          </select>
        </div>

        <button onClick={() => props.setWlistItem(data)} className="add_wlist_item_box__send" type="button">Add</button>
      </form>
    </PopUp>
  )
}

function mapStateToProps(state){
  return {
    name: state.wlist.wlistName,
    link: state.wlist.wlistLink,
    price: state.wlist.wlistPrice,
    text: state.wlist.wlistText,
    group: state.wlist.wlistGroup,
    priority: state.wlist.wlistPriority,
    token: state.user.token,
    errorMsg: state.wlist.errorMsg
  }
}
function mapDispatchToProsp(dispatch) {
  return {
    setName: (name) => dispatch(setName(name)),
    setPrice: (price) => dispatch(setPrice(price)),
    setLink: (link) => dispatch(setLink(link)),
    setText: (text) => dispatch(setText(text)),
    setPriority: (val) => dispatch(setPriority(val)),
    setGroup: (val) => dispatch(setGroup(val)),
    setWlistItem: (data) => dispatch(setWlistItem(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProsp)(AddItem)