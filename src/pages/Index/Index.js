import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Index.scss';
import {getToken, signIn, signUp} from '../../store/User/user.actions';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Index extends Component {
  state = {
    signUpActive: false,
    signUpEmail:'',
    signUpPass: '',
    signUpName: '',
    signInEmail:'',
    signInPass:''
  }

  auth = async () => {
    if(this.state.signUpActive) {
      await this.props.signUp(this.state.signUpEmail, this.state.signUpName, this.state.signUpPass)
    } else {
      await this.props.signIn(this.state.signInEmail, this.state.signInPass)
    }
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
            <h1 className="index__logo">MyNotes</h1>
            <p className="index__box__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
            >Sign In</button>
            |
            <button onClick={() => this.signUpToggleHandler(true)} 
              className={`index__sign_btn ${this.state.signUpActive ? 'index__sign_active' : null}`}
            >Sign Up</button>
            <div className="index__msg_box">
              <span className="sucMsg">{this.props.sucessMsg}</span>
              <span className="errorMsg">{this.props.errorMsg}</span>
            </div>
            
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
    token: state.user.token,
    email: state.user.email,
    name: state.user.name,
    sucessMsg: state.user.successMsg,
    errorMsg: state.user.errorMsg
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getToken: () => dispatch(getToken()),
    signIn: (login, pass) => dispatch(signIn(login, pass)),
    signUp: (email, name, pass) => dispatch(signUp(email, name, pass))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
