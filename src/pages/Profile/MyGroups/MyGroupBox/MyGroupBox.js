import React from 'react';
import {connect} from 'react-redux';

import MyGroupBoxItem from './MyGroupBoxItem/MyGroupBoxItem';
import {deleteCostGroup} from '../../../../store/Costs/costs.actions';

import './MyGroupBox.scss';

const MyGroupBox = props => {
  return (
    <div className="myGroupBox">
      <MyGroupBoxItem groups={props.costGroups} token={props.token} onDelete={props.deleteCostGroup} title="Расходы"/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    costGroups: state.costs.groups,
    token: state.user.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCostGroup: (data) => dispatch(deleteCostGroup(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGroupBox);
