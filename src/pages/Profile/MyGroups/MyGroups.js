import React from 'react';
import './MyGroups.scss';
import {connect} from 'react-redux';
import MyGroupBox from './MyGroupBox/MyGroupBox';
import Heading1 from '../../../components/Heading1/Heading1';

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
    wlistGroups: state.wlist.wlistGroups,
    costGroups: state.finance.groups
  }
}

export default connect(mapStateToProps)(MyGroups);
