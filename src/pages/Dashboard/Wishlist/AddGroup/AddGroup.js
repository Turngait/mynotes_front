import React from 'react'
import { connect } from 'react-redux'
import './AddGroup.scss'
import PopUp from '../../../../components/PopUp/PopUp'
import {addGroup, setGroupTitle} from '../../../../store/Wlist/wlist.actions'

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
        <input onChange={(event) => props.setGroupTitle(event.target.value)} className="add_wlist_item_box__input" type="text" name="name" placeholder="Group name..."/>
        <button onClick={() => props.addGroup(data)} className="add_wlist_item_box__send" type="button">Add</button>
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