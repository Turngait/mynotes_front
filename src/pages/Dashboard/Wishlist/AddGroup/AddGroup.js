import React from 'react';
import { connect } from 'react-redux';
import './AddGroup.scss';
import PopUp from '../../../../components/PopUp/PopUp';
import Input2 from '../../../../components/Input2/Input2';
import ButtonPopUp from '../../../../components/ButtonPopUp/ButtonPopUp';
import {addGroup, setGroupTitle} from '../../../../store/Wlist/wlist.actions';

const AddGroup = props => {
  const {title, token} = props
  const data = {
    title,
    token
  }
  return (
    <PopUp>
      <i onClick={props.onClose} className="fas fa-times close"></i>
      <h3 className="add_wlist__header">Add Wishlist Group</h3>
      {
        props.errorMsg ?
          <span className="errorsMsg">{props.errorMsg}</span>
          : 
          null
      }
      <form className="add_wlist_item_box">
        <Input2 onChange={(event) => props.setGroupTitle(event.target.value)} type="text" name="name" placeholder="Group name..."/>
        <ButtonPopUp onClick={() => props.addGroup(data)} title="Add" />
      </form>
    </PopUp>
  )
}

function mapStateToProps(state){
  return {
    title: state.wlist.wlistGroupTitle,
    token: state.user.token,
    errorMsg: state.wlist.errorMsg
  }
}
function mapDispatchToProsp(dispatch) {
  return {
    setGroupTitle: (title) => dispatch(setGroupTitle(title)),
    addGroup: (data) => dispatch(addGroup(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProsp)(AddGroup)