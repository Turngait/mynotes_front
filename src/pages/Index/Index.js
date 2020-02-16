import React, {Component} from 'react';
import './Index.scss';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { API_URL } from '../../config/api';

class Index extends Component {
  state = {
    signUpActive: false,
    token: '',
    signUpEmail:'',
    signUpPass: '',
    signUpName: '',
    signInEmail:'',
    signInPass:''
  }

  getToken = () => {
    const obj = {
      signUp: this.state.signUpActive
    }
    fetch(API_URL)
    .then(res => {
      return res.text()
    })
    .then(data => this.setState({token: data}, ()=>console.log(this.state)))
  }

  signUpToggleHandler = (val) => {
    this.setState({ signUpActive: val });
  }

  getUserInfo = (event) => {
    switch(event.target.id) {
      case 'signInEmail':
        this.setState({ signInEmail: event.target.value})
        break;
      case 'signInPass':
          this.setState({ signInPass: event.target.value })
        break;
      case 'SignUpEmail':
          this.setState({ signUpEmail: event.target.value})
        break;
      case 'signUpPass':
          this.setState({ signUpPass: event.target.value })
        break;
      case 'signUpName':
          this.setState({ signUpName: event.target.value })
        break;
      default:
        return false;

    }
  }

  render() {
    return (
      <div className="index">
        <h1 className="index__logo">MyNotes</h1>

        <button onClick={() => this.signUpToggleHandler(false)} 
          className={`index__sign_btn ${!this.state.signUpActive ? 'index__sign_active' : null}`}
        >Sign In</button>

        <button onClick={() => this.signUpToggleHandler(true)} 
          className={`index__sign_btn ${this.state.signUpActive ? 'index__sign_active' : null}`}
        >Sign Up</button>
        
        {
        this.state.signUpActive 
        ? 
          <SignUp onSubmit={this.getToken} getInfo={this.getUserInfo}/> 
        : 
          <SignIn onSubmit={this.getToken} getInfo={this.getUserInfo}/>
        }
      </div>
    )
  }
}

export default Index;
