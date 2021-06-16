import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

import Input from '../../../components/Input2/Input2';
import Button from '../../../components/ButtonPopUp/ButtonPopUp';

import './SignUp.scss';

const SignUp = props => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const onSubmit = () => {
    props.signUp(email, name, pass, props.auth, props.showMsg);
  }

  return (
    <form className="signUp">
      <Input onChange={(event) => setEmail(event.target.value)} inputId='SignUpEmail' type="email" name="email" placeholder="Укажите Ваш e-mail..." />
      <Input onChange={(event) => setName(event.target.value)} inputId='signUpName' type="text" name="name" placeholder="Укажите Ваше имя..." />
      <Input onChange={(event) => setPass(event.target.value)} inputId='signUpPass' type="password" name="pass" placeholder="Укажите Ваш пароль..." />
      <p className="signUp__desclaimer">
        Нажимая кнопку Регистрация Вы соглашаетесь с <NavLink target="_blank" to="/policy" className="signUp__desclaimer__link">"Политикой обработки конфеденциальных данных"</NavLink>
      </p>
      <Button onClick={onSubmit} title = 'Регистрация'/>
    </form>
  )
}

export default SignUp
