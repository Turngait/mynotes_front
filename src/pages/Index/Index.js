import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {getToken, auth} from '../../store/User/user.actions';
import {signIn, signUp} from './hooks';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

import VkIco from './img/vk-ico.png';
import InstIco from './img/insta-ico.png';
import TgIco from './img/tg-ico.png';

import './Index.scss';

class Index extends Component {
  state = {
    signUpActive: false,
    email:'',
    pass: '',
    name: '',
    msg: ''
  }

  auth = async () => {
    if(this.state.signUpActive) {
      await signUp(
        this.state.email, 
        this.state.name, 
        this.state.pass, 
        (data) =>this.props.auth(data),
        (msg) => {
          this.setState({msg});
          setTimeout(() => {this.setState({msg: null})}, 5000);
        }
      );

    } else {
      await signIn(
        this.state.email, 
        this.state.pass,
        (data) =>this.props.auth(data),
        (msg) => {
          this.setState({msg});
          setTimeout(() => {this.setState({msg: null})}, 3000);
        }
      );
    }
  }

  signUpToggleHandler = (val) => {
    this.setState({ signUpActive: val });
  }

  getUserInfo = (event) => {
    switch(event.target.id) {
      case 'signInEmail':
        this.setState({ email: event.target.value})
        break;
      case 'signInPass':
          this.setState({ pass: event.target.value })
        break;
      case 'SignUpEmail':
          this.setState({ email: event.target.value})
        break;
      case 'signUpPass':
          this.setState({ pass: event.target.value })
        break;
      case 'signUpName':
          this.setState({ name: event.target.value })
        break;
      default:
        return false;
    }
  }

  componentDidMount() {
    this.props.getToken()
    if (this.props.token) {
      this.props.history.push('/dashboard')
    }
  }
  componentDidUpdate() {
    this.props.getToken()
    if (this.props.token) {
      this.props.history.push('/dashboard')
    }
  }

  render() {
    return (
      <div className="index">
        <nav className="index__nav">
          <NavLink to="/contacts" className="index__nav__item">Контакты</NavLink>
        </nav>
        <div className="index__box">
          <div className="index__box__socioBox">
            <img src={VkIco} alt="VK" />
            <img src={InstIco} alt="IG" />
            <img src={TgIco} alt="TG" />
          </div>
          <div>
            <h1 className="index__logo">FinCloud</h1>
            <p className="index__box__text">
              Здесь Вы сможете легко вести статистику и учет своих личных финансов.
            </p>
          </div>

          <div className="index__box__signBox">
            <button onClick={() => this.signUpToggleHandler(false)} 
              className={`index__sign_btn ${!this.state.signUpActive ? 'index__sign_active' : null}`}
            >Войти</button>
            <button onClick={() => this.signUpToggleHandler(true)} 
              className={`index__sign_btn ${this.state.signUpActive ? 'index__sign_active' : null}`}
            >Создать</button>
            {
              this.state.msg ?
                <div className="index__msg_box">
                  <span className="errorMsg">{this.state.msg}</span>
                </div>
                :
                null
            }

            {
            this.state.signUpActive 
            ? 
              <SignUp onSubmit={this.auth} getInfo={this.getUserInfo}/> 
            : 
              <SignIn onSubmit={this.auth} getInfo={this.getUserInfo}/>
            }
          </div>
        </div>
        <div className="index__footer">
          2020 © MyNotes <NavLink target="_blank" className="index__footer__link" to="/policy">"Политикой обработки конфеденциальных данных"</NavLink>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getToken: () => dispatch(getToken()),
    auth: (data) => dispatch(auth(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
