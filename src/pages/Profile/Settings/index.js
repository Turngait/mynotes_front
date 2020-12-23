import React from 'react';
import {connect} from 'react-redux';

import Input from '../../../components/Input2/Input2';
import Button from '../../../components/Button1/Button1';

import {saveUserData, changePass} from './hooks';

import './index.scss';

const Settings = props => {
  const [name, setName] = React.useState(props.name);
  const [email, setEmail] = React.useState(props.email);
  const [userDataMsg, setUserDataMsg] = React.useState(null);

  const[oldPass, setOldPass] = React.useState('');
  const[newPass, setNewPass] = React.useState('');
  const [changePassMsg, setChangePassMsg] = React.useState(null);

  return  (
    <>
      <div className="settingsBox">
        <div className="settingsBox__item">
          <p className="settingsBox__item__header">Ваши данные</p>
          {
            userDataMsg ? <p className="settingsBox__item__msg">{userDataMsg}</p> : null
          }
          <div className="settingsBox__item__form">
            <Input onChange={(event) => setName(event.target.value)} value={name} placeholder={'Ваше имя'} />
            <Input onChange={(event) => setEmail(event.target.value)} value={email} placeholder={'Ваш email'} />
          </div>
          <Button onClick={() => saveUserData(name, email, props.token, setUserDataMsg)} title={'Сохранить'}/>
        </div>
        <div className="settingsBox__item">
          <p className="settingsBox__item__header">Сменить пароль</p>
          {
            changePassMsg ? <p className="settingsBox__item__msg">{changePassMsg}</p> : null
          }
          <div className="settingsBox__item__form">
            <Input type={'password'} onChange={(event) => setOldPass(event.target.value)} placeholder={'Старый пароль'} />
            <Input type={'password'} onChange={(event) => setNewPass(event.target.value)} placeholder={'Новый пароль'} />
          </div>
          <Button onClick={() => changePass(oldPass, newPass, props.token, setChangePassMsg)} title={'Сохранить'}/>
        </div>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    token: state.user.token,
    name: state.user.name,
    email: state.user.email
  }
}

export default connect(mapStateToProps, null)(Settings);
