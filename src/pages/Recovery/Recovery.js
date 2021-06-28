import React, {useState} from 'react';

import Header from '../../components/Header/Header';
import Input from '../../components/Input1/Input1';
import Button from '../../components/Button1/Button1';

import { sendMessage } from './services';

import './Recovery.scss';

const Recovery = ({history}) => {
  const [email, setEmail] = useState('');
  const [isSend, setIsSend] = useState(false);

  async function recover() {
    const isSend = await sendMessage(email);
    setIsSend(isSend);
  }

  function goToMain () {
    history.push('/');
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

          <Input value={email} type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Введите ваш e-mail..." name="email"/>
          <div className="recovery_main__form__btnsBox">
            <Button onClick={recover} title="Восстановить" />
            <Button onClick={goToMain} title="Назад" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Recovery;
