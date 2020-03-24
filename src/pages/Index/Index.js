import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Index.scss';
import {setToken, getToken, setInfo} from '../../store/User/user.actions'
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { API_URL } from '../../config/api';

class Index extends Component {
  state = {
    signUpActive: false,
    signUpEmail:'',
    signUpPass: '',
    signUpName: '',
    signInEmail:'',
    signInPass:''
  }

  getToken = () => {
    console.log(this.props)
    let auth = ''
    let body = {}

    if(this.state.signUpActive) {
      auth = '/auth/signup'
      body = {
        email: this.state.signUpEmail,
        pass: this.state.signUpPass,
        name: this.state.signUpName
      }
    } else {
      auth = '/auth/signin'
      body = {
        email: this.state.signInEmail,
        pass: this.state.signInPass
      }
    }

    fetch(API_URL+auth, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      if(data.status === 200) {
        this.props.setToken(data.data.token)
        this.props.setInfo(data.data)
      } else {
        console.log('Wrong')
      }
    })
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

function mapStateToProps(state) {
  return {
    token: state.user.token,
    email: state.user.email,
    name: state.user.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setToken: (token) => dispatch(setToken(token)),
    getToken: () => dispatch(getToken()),
    setInfo: (user) => dispatch(setInfo(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
