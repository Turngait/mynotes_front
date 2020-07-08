import React from 'react';
import './MyData.scss';
import Heading1 from '../../../components/Heading1/Heading1';
import Button1 from '../../../components/Button1/Button1';
import Statistics from './Statistics/Statistics';
import Settings from './Settings/Settings';
import {connect} from 'react-redux';
import {toggleSettingsWindow} from '../../../store/Profile/profile.action';

const MyData = props => {
  return (
    <>
    {
      props.isSettingsOpen ?
        <Settings />
      :
        null
    }
    <div className="profileBox__headerBox">
      <Heading1 title='MyData' />
      <Button1 title='Настройки' onClick={() => props.toggleSettingsWindow(true)}/>
    </div>
      <div className="profileBox">
        <Statistics />
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    balance: state.user.balance,
    token: state.user.token,
    successMsg: state.user.successMsg,
    isSettingsOpen: state.profile.isSettingsOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSettingsWindow: (data) => dispatch(toggleSettingsWindow(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyData);
