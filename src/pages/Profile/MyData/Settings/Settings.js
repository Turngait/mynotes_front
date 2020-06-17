import React from 'react';
import './Settings.scss';
import PopUp from '../../../../components/PopUp/PopUp';
import Input1 from '../../../../components/Input1/Input1';
import Button from '../../../../components/ButtonPopUp/ButtonPopUp';
import { connect } from 'react-redux';
import {toggleSettingsWindow} from '../../../../store/Profile/profile.action';
import {setBalance, saveBalance} from '../../../../store/User/user.actions';



const Settings = props => {
  return (
      <PopUp>
        <i onClick={() => props.toggleSettingsWindow(false)} className="fas fa-times close"></i>
        <h1 className="settings__header">Настройки</h1>

        <div className="settings__box">
          <div>
            <div className="profileBox__balanceBox">
              <h3 className="profileBox__balanceBox__header">Ваши данные</h3>
              {
                props.successMsg ?
                  <p className="profileBox__balanceBox__successMsg">{props.successMsg}</p>
                : null
              }
              <Input1 placeholder="Ваше имя..." value={props.name}/>
              <br></br>
              <Input1 placeholder="Ваш e-mail..." value={props.email}/>
              <br></br>
              <Button title='Сохранить'/>
            </div>

            <div className="profileBox__balanceBox">
              <h3 className="profileBox__balanceBox__header">Сменить пароль</h3>
              {
                props.successMsg ?
                  <p className="profileBox__balanceBox__successMsg">{props.successMsg}</p>
                : null
              }
              <Input1 placeholder="Старый пароль..." />
              <br></br>
              <Input1 placeholder="Новый пароль..." />
              <br></br>
              <Button title='Сохранить'/>
            </div>

          </div>
          <div className="profileBox__balanceBox">
            <h3 className="profileBox__balanceBox__header">Your balance</h3>
            {
              props.successMsg ?
                <p className="profileBox__balanceBox__successMsg">{props.successMsg}</p>
              : null
            }
            <Input1 onChange={event => props.setBalance(event.target.value)} placeholder="Enter yourbalance..." value={props.balance}/>
            <br></br>
            <Button onClick={() => props.saveBalance({token: props.token, balance: props.balance})} title='Set Balance'/>
          </div>
        </div>

      </PopUp>
  )
}

function mapStateToProps (state) {
  return {
    balance: state.user.balance,
    email: state.user.email,
    name: state.user.name,
    token: state.user.token,
    successMsg: state.user.successMsg,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setBalance: (data) => dispatch(setBalance(data)),
    saveBalance: (data) => dispatch(saveBalance(data)),
    toggleSettingsWindow: (data) => dispatch(toggleSettingsWindow(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
