import React from 'react';
import {NavLink} from 'react-router-dom';

import './SignUp.scss';
import Input2 from '../../../components/Input2/Input2';
import Button from '../../../components/ButtonPopUp/ButtonPopUp';

const SignUp = props => {
  return (
    <form className="signUp">
      <Input2 onChange={props.getInfo} inputId='SignUpEmail' type="email" name="email" placeholder="Укажите Ваш e-mail..." />
      <Input2 onChange={props.getInfo} inputId='signUpName' type="text" name="name" placeholder="Укажите Ваше имя..." />
      <Input2 onChange={props.getInfo} inputId='signUpPass' type="password" name="pass" placeholder="Укажите Ваш пароль..." />
      <p className="signUp__desclaimer">
        Нажимая кнопку Регистрация Вы соглашаетесь с <NavLink target="_blank" to="/policy" className="signUp__desclaimer__link">"Политикой обработки конфеденциальных данных"</NavLink>
      </p>
      <Button onClick={props.onSubmit} title = 'Регистрация'/>
    </form>
  )
}

export default SignUp
