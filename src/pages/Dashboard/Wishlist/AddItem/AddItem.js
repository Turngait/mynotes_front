import React from 'react';
import { connect } from 'react-redux';
import './AddItem.scss';
import PopUp from '../../../../components/PopUp/PopUp';
import Input2 from '../../../../components/Input2/Input2';
import Input2UnReq from '../../../../components/Input2/Input2UnRequired';
import ButtonPopUp from '../../../../components/ButtonPopUp/ButtonPopUp';
import Select1 from '../../../../components/Select1/Select1';
import Textarea1 from '../../../../components/Textarea1/Textarea1';
import {setName, setText, setLink, setPrice, setPriority, setWlistItem, setGroup} from '../../../../store/Wlist/wlist.actions';

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
        <Input2 onChange={(event) => props.setName(event.target.value)} type="text" name="name" placeholder="Item name..."/>
        <Input2 onChange={(event) => props.setPrice(event.target.value)} type="text" name="price" placeholder="Item price..."/>
        <Input2UnReq onChange={(event) => props.setLink(event.target.value)} type="text" name="link" placeholder="Item link (if exist)..."/>
        <Textarea1 onChange={(event) => props.setText(event.target.value)} name="text" placeholder="Description...">
        </Textarea1>

        <div className="add_wlist_item_box__opt">
        <Select1 onChange={(event) => props.setGroup(event.target.value)}>
          <option value="0">MustHave</option>
          {
            props.groups.length > 0 ?
            props.groups.map((group, key) => {
              return (<option key={key} value={group.id}>{group.title}</option>)
            })
            :
            null
          }
          </Select1>
          <Select1 onChange={(event) => props.setPriority(event.target.value)}>
            <option value="1">Priority 1</option>
            <option value="2">Priority 2</option>
            <option value="3">Priority 3</option>
            <option value="4">Priority 4</option>
          </Select1>
        </div>

        <ButtonPopUp onClick={() => props.setWlistItem(data)} title="Add" />
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
    groups: state.wlist.wlistGroups,
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