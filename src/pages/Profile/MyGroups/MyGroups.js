import React from 'react';
import './MyGroups.scss';
import {connect} from 'react-redux';
import MyGroupBox from './MyGroupBox/MyGroupBox';

const MyGroups = props => {
  return (
    <>
      <h1>MyGroups</h1>
      <MyGroupBox />
    </>
  )
}

function mapStateToProps(state) {
  return {
    wlistGroups: state.wlist.wlistGroups,
    costGroups: state.finance.groups
  }
}

export default connect(mapStateToProps)(MyGroups);
