import React from 'react';
import './AddGroup.scss';
import PopUp from '../../../../components/PopUp/PopUp';
import {connect} from 'react-redux';
import {closeAddCostGroup, setCostGroupTitle, addGroupToDB} from '../../../../store/Finance/finance.actions'

const AddGroup = props => {
  const {groupTitle, token} = props;
  const data = {
    token,
    groupTitle
  }

  return (
    <PopUp>
      <i onClick={props.closeAddCostGroup} className="fas fa-times close"></i>
      <h3 className="add_wlist__header">Add Cost's Group</h3>
      {
        props.errorMsg ?
          <span className="errorsMsg">{props.errorMsg}</span>
          : 
          null
      }
      <form className="add_wlist_item_box">
        <input onChange={(event) => props.setCostGroupTitle(event.target.value)} className="add_wlist_item_box__input" type="text" name="name" placeholder="Group name..."/>
        <button onClick={() => props.addGroupToDB(data)} className="add_wlist_item_box__send" type="button">Add</button>
      </form>
    </PopUp>
  );
}

function mapStateToProps (state) {
  return {
    groupTitle: state.finance.groupTitle,
    token: state.user.token,
    errorMsg: state.finance.addGroupError
  }
}

function mapDispatchToProps (dispatch) {
  return {
    closeAddCostGroup: () => dispatch(closeAddCostGroup()),
    setCostGroupTitle: (title) => dispatch(setCostGroupTitle(title)),
    addGroupToDB: (data) => dispatch(addGroupToDB(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);
