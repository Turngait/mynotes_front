import React from 'react';
import {connect} from 'react-redux';

import Heading1 from '../../../components/Heading1/Heading1';
import Button1 from '../../../components/Button1/Button1';
import Statistics from './Statistics/Statistics';
import Settings from './Settings/Settings';

import './MyData.scss';

const MyData = props => {
  const [isSettingOpen,setIsSettingOpen] = React.useState(false);

  return (
    <>
    { isSettingOpen ? <Settings setIsSettingOpen={setIsSettingOpen}/> : null }
    <div className="profileBox__headerBox">
      <Heading1 title='MyData' />
      <Button1 title='Настройки' onClick={() => setIsSettingOpen(true)}/>
    </div>
    <div className="profileBox"><Statistics /></div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    balance: state.user.balance,
    token: state.user.token,
    successMsg: state.user.successMsg,
  }
}


export default connect(mapStateToProps, null)(MyData);
