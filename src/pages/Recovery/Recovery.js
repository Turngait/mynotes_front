import React, {useState} from 'react';
import './Recovery.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Input1 from '../../components/Input1/Input1';
import Button1 from '../../components/Button1/Button1';
import {API_URL} from '../../config/api';

const Recovery = props => {
  const [email, setEmail] = useState('');
  const [isSend, setIsSend] = useState(false);

  function sendMessage() {
    fetch(API_URL + '/auth/recovery', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email})
    })
    .then(res => {
      return res.json(); 
    })
    .then(data => {
      if(data.send) {
        setIsSend(true);
      }
    })
  }

  return (
    <div className="recovery">
      <Header mainPage={true} />
      <main className="recovery_main">
        <h2 className="recovery_main__header1">Восстановление пароля</h2>
        <form className="recovery_main__form">
          {
            !isSend ?
            <p>
              Если Вы забыли свой пароль, то смежете его восстановить. 
              <br></br>
              Введите свой e-mail и Вам на почту придет ссылка по которой Вы сможете ввести новый пароль.
            </p>
            :
            <p>
              <b>Вам на указанную электронную почту было отправленно письмо.</b>
            </p>
          }

          <Input1 value={email} type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Введите ваш e-mail..." name="email"/>
          <br></br>
          <Button1 onClick={sendMessage} title="Восстановить" />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Recovery;
