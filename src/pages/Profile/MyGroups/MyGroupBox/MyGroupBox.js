import React from 'react';
import './MyGroupBox.scss';
import {connect} from 'react-redux';
import MyGroupBoxItem from './MyGroupBoxItem/MyGroupBoxItem';
import {deleteCostGroup} from '../../../../store/Finance/finance.actions';

const MyGroupBox = props => {
  return (
    <div className="myGroupBox">
      <MyGroupBoxItem groups={props.costGroups} token={props.token} onDelete={props.deleteCostGroup} title="Расходы"/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    costGroups: state.finance.groups,
    token: state.user.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCostGroup: (data) => dispatch(deleteCostGroup(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGroupBox);
