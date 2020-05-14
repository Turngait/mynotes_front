import React from 'react';
import './MyGroupBox.scss';
import {connect} from 'react-redux';
import MyGroupBoxItem from './MyGroupBoxItem/MyGroupBoxItem';
import {deleteCostGroup} from '../../../../store/Finance/finance.actions';
import {deleteWlistGroup} from '../../../../store/Wlist/wlist.actions';

const MyGroupBox = props => {
  return (
    <div className="myGroupBox">
      <MyGroupBoxItem groups={props.costGroups} token={props.token} onDelete={props.deleteCostGroup} title="Costs"/>
      <MyGroupBoxItem groups={props.wlistGroups} token={props.token} onDelete={props.deleteWlistGroup} title="Wlists"/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    wlistGroups: state.wlist.wlistGroups,
    costGroups: state.finance.groups,
    token: state.user.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCostGroup: (data) => dispatch(deleteCostGroup(data)),
    deleteWlistGroup: (data) => dispatch(deleteWlistGroup(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGroupBox);
