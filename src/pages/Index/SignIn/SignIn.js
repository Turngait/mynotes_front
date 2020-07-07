import React from 'react';
import './SignIn.scss';
import Input2 from '../../../components/Input2/Input2';
import Button from '../../../components/ButtonPopUp/ButtonPopUp';
import {NavLink} from 'react-router-dom';

const SignIn = props => {
  return (
    <form className="signIn">
      <Input2 onChange={props.getInfo} inputId='signInEmail' type="email" name="email" placeholder="Введите Ваш e-mail..." />
      <Input2 onChange={props.getInfo} inputId='signInPass' type="password" name="pass" placeholder="Введите Ваш пароль..." />
      <Button title='Войти' onClick={props.onSubmit}/>
      <NavLink to="/recovery"p>Восстановить пароль.</NavLink>
    </form>
  )
}

export default SignIn
