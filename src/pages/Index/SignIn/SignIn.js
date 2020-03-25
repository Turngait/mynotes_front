import React from 'react'
import './SignIn.scss'
import Input2 from '../../../components/Input2/Input2'
import Button1 from '../../../components/Button1/Button1'

const SignIn = props => {
  return (
    <form className="signIn">
      <Input2 onChange={props.getInfo} inputId='signInEmail' type="email" name="email" placeholder="Enter your e-mail..." />
      <Input2 onChange={props.getInfo} inputId='signInPass' type="password" name="pass" placeholder="Enter your password..." />
      <Button1 value='Sign In' onClick={props.onSubmit}/>
    </form>
  )
}

export default SignIn
