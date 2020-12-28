import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getToken, auth} from '../../store/User/user.actions';
import {signIn, signUp} from './hooks';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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
        <Header mainPage={true} />
        <div className="index__box">
          <div>
            <h1 className="index__logo">FinCloud</h1>
            <p className="index__box__text">
              Здесь Вы сможете легко вести статистику и учет своих личных финансов.
            </p>
            <div className="index__box__iconsBox">
              <img className="index__box__iconsBox__item" src="/pic/main/main_1.png" alt="main promo"/>
              <img className="index__box__iconsBox__item" src="/pic/main/main_2.png" alt="main promo"/>
              <img className="index__box__iconsBox__item" src="/pic/main/main_3.png" alt="main promo"/>
              <img className="index__box__iconsBox__item" src="/pic/main/main_4.png" alt="main promo"/>
              <img className="index__box__iconsBox__item" src="/pic/main/main_5.png" alt="main promo"/>
            </div>
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
        <Footer />
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
