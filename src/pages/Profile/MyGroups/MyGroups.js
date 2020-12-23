import React from 'react';
import {connect} from 'react-redux';

import MyGroupBox from './MyGroupBox/MyGroupBox';

import './MyGroups.scss';

const MyGroups = props => {
  return (
    <>
      <MyGroupBox />
    </>
  )
}

function mapStateToProps(state) {
  return {
    costGroups: state.costs.groups
  }
}

export default connect(mapStateToProps)(MyGroups);
