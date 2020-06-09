import React from 'react';
import './MyData.scss';
import Heading1 from '../../../components/Heading1/Heading1';
import Input1 from '../../../components/Input1/Input1';
import Button1 from '../../../components/Button1/Button1';
import {connect} from 'react-redux';
import {setBalance, saveBalance} from '../../../store/User/user.actions';

const MyData = props => {
  return (
    <>
      <Heading1 title='MyData' />
      <div className="profileBox">
        <div className="profileBox__balanceBox">
          <h3 className="profileBox__balanceBox__header">Your balance</h3>
          {
            props.successMsg ?
              <p className="profileBox__balanceBox__successMsg">{props.successMsg}</p>
            : null
          }
          <Input1 onChange={event => props.setBalance(event.target.value)} placeholder="Enter yourbalance..." value={props.balance}/>
          <br></br>
          <Button1 onClick={() => props.saveBalance({token: props.token, balance: props.balance})} title='Set Balance'/>
        </div>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    balance: state.user.balance,
    token: state.user.token,
    successMsg: state.user.successMsg
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setBalance: (data) => dispatch(setBalance(data)),
    saveBalance: (data) => dispatch(saveBalance(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyData);
