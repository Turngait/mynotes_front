import React from 'react';
import './SignUp.scss';
import Input2 from '../../../components/Input2/Input2';
import Button1 from '../../../components/Button1/Button1';

const SignUp = props => {
  return (
    <form className="signUp">
      <Input2 type="email" name="email" placeholder="Enter your e-mail..." />
      <Input2 type="text" name="name" placeholder="Enter your name..." />
      <Input2 type="password" name="pass" placeholder="Enter your password..." />
      <Button1 onClick={props.onSubmit} value = 'Sign In'/>
    </form>
  )
}

export default SignUp;
