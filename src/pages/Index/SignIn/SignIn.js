import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

import Input from '../../../components/Input2/Input2';
import Button from '../../../components/ButtonPopUp/ButtonPopUp';

import './SignIn.scss';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const signIn = () => {
    props.signIn(email, pass, props.auth, props.showMsg);
  }

  return (
    <form className="signIn">
      <Input onChange={(event) => setEmail(event.target.value)} inputId='signInEmail' type="email" name="email" placeholder="Введите Ваш e-mail..." />
      <Input onChange={(event) => setPass(event.target.value)} inputId='signInPass' type="password" name="pass" placeholder="Введите Ваш пароль..." />
      <Button title='Войти' onClick={signIn}/>
      <NavLink to="/recovery" className="signIn__recovery_link">Восстановить пароль.</NavLink>
    </form>
  )
}

export default SignIn
