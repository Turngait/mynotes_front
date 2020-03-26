import React from 'react'
import './SignUp.scss'
import Input2 from '../../../components/Input2/Input2'
import Button1 from '../../../components/Button1/Button1'

const SignUp = props => {
  return (
    <form className="signUp">
      <span>{props.authMsg}</span>
      <Input2 onChange={props.getInfo} inputId='SignUpEmail' type="email" name="email" placeholder="Enter your e-mail..." />
      <Input2 onChange={props.getInfo} inputId='signUpName' type="text" name="name" placeholder="Enter your name..." />
      <Input2 onChange={props.getInfo} inputId='signUpPass' type="password" name="pass" placeholder="Enter your password..." />
      <Button1 onClick={props.onSubmit} value = 'Sign In'/>
    </form>
  )
}

export default SignUp
