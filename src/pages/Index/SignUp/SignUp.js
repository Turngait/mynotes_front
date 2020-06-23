import React from 'react'
import './SignUp.scss'
import Input2 from '../../../components/Input2/Input2'
import Button from '../../../components/ButtonPopUp/ButtonPopUp'

const SignUp = props => {
  return (
    <form className="signUp">
      <Input2 onChange={props.getInfo} inputId='SignUpEmail' type="email" name="email" placeholder="Enter your e-mail..." />
      <Input2 onChange={props.getInfo} inputId='signUpName' type="text" name="name" placeholder="Enter your name..." />
      <Input2 onChange={props.getInfo} inputId='signUpPass' type="password" name="pass" placeholder="Enter your password..." />
      <Button onClick={props.onSubmit} title = 'Sign In'/>
    </form>
  )
}

export default SignUp
