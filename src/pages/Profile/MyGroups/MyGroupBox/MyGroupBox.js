import React from 'react';
import {connect} from 'react-redux';

import MyGroupBoxItem from './MyGroupBoxItem/MyGroupBoxItem';
import {deleteCostGroup} from '../../../../store/Costs/costs.actions';
import {deleteSource} from '../../../../store/Incomes/income.action';

import './MyGroupBox.scss';

const MyGroupBox = props => {
  return (
    <div className="myGroupBox">
      <MyGroupBoxItem type="costs" groups={props.costGroups} token={props.token} currancy={props.currancy} onDelete={props.deleteCostGroup} title="Группы расходов"/>
      <MyGroupBoxItem type="incomes" groups={props.incomeSources} token={props.token} currancy={props.currancy} onDelete={props.deleteSource} title="Источники доходов"/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    costGroups: state.costs.groups,
    incomeSources: state.income.sources,
    currancy: state.user.settings.currency,
    token: state.user.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCostGroup: (data) => dispatch(deleteCostGroup(data)),
    deleteSource: (data) => dispatch(deleteSource(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGroupBox);
