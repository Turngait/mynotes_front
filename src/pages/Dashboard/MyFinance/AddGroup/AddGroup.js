import React from 'react';
import './AddGroup.scss';
import PopUp from '../../../../components/PopUp/PopUp';
import Input2 from '../../../../components/Input2/Input2';
import ButtonPopUp from '../../../../components/ButtonPopUp/ButtonPopUp';
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
        <Input2 onChange={(event) => props.setCostGroupTitle(event.target.value)} type="text" name="name" placeholder="Group name..." />
        <ButtonPopUp onClick={() => props.addGroupToDB(data)} type="button" title="Add" />
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
