import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Input from '../../../components/Input2/Input2';
import Button from '../../../components/ButtonPopUp/ButtonPopUp';

import './SignUp.scss';

const SignUp = props => {
  const { t } = useTranslation();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const onSubmit = () => {
    props.signUp(email, name, pass, props.auth, props.showMsg);
  }

  return (
    <form className="signUp">
      <Input onChange={(event) => setEmail(event.target.value)} inputId='SignUpEmail' type="email" name="email" placeholder={t('index.yourEmail')} />
      <Input onChange={(event) => setName(event.target.value)} inputId='signUpName' type="text" name="name" placeholder={t('index.yourName')} />
      <Input onChange={(event) => setPass(event.target.value)} inputId='signUpPass' type="password" name="pass" placeholder={t('index.yourPass')} />
      <p className="signUp__desclaimer">
        {t('index.descAtSignUp')} <NavLink target="_blank" to="/policy" className="signUp__desclaimer__link">"{t('index.policy')}"</NavLink>
      </p>
      <Button onClick={onSubmit} title={t('index.signUp')}/>
    </form>
  )
}

export default SignUp
