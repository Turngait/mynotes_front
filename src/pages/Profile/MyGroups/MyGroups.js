import React from 'react';
import {connect} from 'react-redux';

import MyGroupBox from './MyGroupBox/MyGroupBox';
import Heading1 from '../../../components/Heading1/Heading1';

import './MyGroups.scss';

const MyGroups = props => {
  return (
    <>
      <Heading1 title='MyGroups' />
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
