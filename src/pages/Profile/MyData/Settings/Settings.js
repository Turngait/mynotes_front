import React from 'react';
import './Settings.scss';
import PopUp from '../../../../components/PopUp/PopUp';
import Input1 from '../../../../components/Input1/Input1';
import Button from '../../../../components/ButtonPopUp/ButtonPopUp';
import { connect } from 'react-redux';
import {toggleSettingsWindow} from '../../../../store/Profile/profile.action';
import {setBalance, setUserName, setUserEmail, saveBalance, saveNewUserData,setPasswords, changePassword} from '../../../../store/User/user.actions';



const Settings = props => {
  return (
      <PopUp>
        <i onClick={() => props.toggleSettingsWindow(false)} className="fas fa-times close"></i>
        <h1 className="settings__header">Настройки</h1>
        {
          props.successMsg ?
            <p className="profileBox__balanceBox__successMsg">{props.successMsg}</p>
          : null
        }
        <div className="settings__box">
          <div>
            <div className="profileBox__balanceBox">
              <h3 className="profileBox__balanceBox__header">Ваши данные</h3>

              <Input1 onChange={(event) => props.setUserName(event.target.value)} placeholder="Ваше имя..." value={props.name}/>
              <br></br>
              <Input1 onChange={(event) => props.setUserEmail(event.target.value)} placeholder="Ваш e-mail..." value={props.email}/>
              <br></br>
              <Button onClick={() => props.saveNewUserData({name: props.name, email: props.email, token: props.token})} title='Сохранить'/>
            </div>

            <div className="profileBox__balanceBox">
              <h3 className="profileBox__balanceBox__header">Сменить пароль</h3>
              <Input1 value={props.pass.old} onChange={(event) => props.setPasswords({type: 'old', pass: event.target.value})} placeholder="Старый пароль..." />
              <br></br>
              <Input1 value={props.pass.new} onChange={(event) => props.setPasswords({type: 'new', pass: event.target.value})} placeholder="Новый пароль..." />
              <br></br>
              <Button onClick={() => props.changePassword({pass: props.pass, token: props.token})} title='Сохранить'/>
            </div>

          </div>
          <div>
            <div className="profileBox__balanceBox">
              <h3 className="profileBox__balanceBox__header">Your balance</h3>
              <Input1 onChange={event => props.setBalance(event.target.value)} placeholder="Enter yourbalance..." value={props.balance}/>
              <br></br>
              <Button onClick={() => props.saveBalance({token: props.token, balance: props.balance})} title='Set Balance'/>
            </div>

            {/* <div className="profileBox__balanceBox">
              <h3 className="profileBox__balanceBox__header">Your currency</h3>
              <Input1 placeholder="Enter your currency..." value={props.currency}/>
              <br></br>
              <Button title='Set Currency'/>
            </div>

            <div className="profileBox__balanceBox">
              <h3 className="profileBox__balanceBox__header">Your language</h3>
              <Input1 placeholder="Enter your lang..." value={props.local}/>
              <br></br>
              <Button title='Save'/>
            </div> */}
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
    currency: state.user.settings.currency,
    local: state.user.settings.local,
    pass: state.user.pass
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setBalance: (data) => dispatch(setBalance(data)),
    setUserName: (name) => dispatch(setUserName(name)),
    setUserEmail: (email) => dispatch(setUserEmail(email)),
    saveBalance: (data) => dispatch(saveBalance(data)),
    saveNewUserData: (data) => dispatch(saveNewUserData(data)),
    setPasswords: (data) => dispatch(setPasswords(data)),
    changePassword: (data) => dispatch(changePassword(data)),
    toggleSettingsWindow: (data) => dispatch(toggleSettingsWindow(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
