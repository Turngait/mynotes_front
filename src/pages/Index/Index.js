import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getToken, auth } from '../../store/User/user.actions';
import { signIn, signUp } from './services';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

import VkIco from './img/vk-ico.png';
import InstIco from './img/insta-ico.png';
import TgIco from './img/tg-ico.png';

import './Index.scss';

const Index = ({auth, getToken, token, history}) => {
  const [signUpActive, setSignUpActive] = useState(false);
  const [msg, setMsg] = useState(null);

  const showMsg = (msg) => {
    setMsg(msg);
    setTimeout(() => {setMsg(null)}, 5000);
  }

  const signUpToggleHandler = (status) => {
    setSignUpActive(status);
  }

  useEffect(() => {
    getToken();
    if (token) {
      history.push('/dashboard')
    }
  }, [token]);

  return (
    <div className="index">
      <nav className="index__nav">
        <NavLink to="/about" className="index__nav__item">Подробнее</NavLink>
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
          <button onClick={() => signUpToggleHandler(false)} 
            className={`index__sign_btn ${!signUpActive ? 'index__sign_active' : null}`}
          >Войти</button>
          <button onClick={() => signUpToggleHandler(true)} 
            className={`index__sign_btn ${signUpActive ? 'index__sign_active' : null}`}
          >Создать</button>
          {
            msg ?
              <div className="index__msg_box">
                <span className="errorMsg">{msg}</span>
              </div>
              :
              null
          }

          {
            signUpActive
            ? 
              <SignUp signUp={signUp} auth={auth} showMsg={showMsg} /> 
            : 
              <SignIn signIn={signIn} auth={auth} showMsg={showMsg} />
          }
        </div>
      </div>
      <div className="index__footer">
        {new Date().getFullYear()} © MyNotes <NavLink target="_blank" className="index__footer__link" to="/policy">"Политикой обработки конфеденциальных данных"</NavLink>
      </div>
    </div>
  )
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
