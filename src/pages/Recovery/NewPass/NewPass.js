import React, {useState, useEffect} from 'react';

import Header from '../../../components/Header/Header';
import Input from '../../../components/Input1/Input1';
import Button from '../../../components/Button1/Button1';

import { setNewPassword } from '../services';

import '../Recovery.scss';

const NewPass = props => {
  const [newPass, setNewPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    if (newPass === repeatPass) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [repeatPass, newPass])

  async function changePass() {
    const {email, hash} = props.match.params;

    if(isValid && newPass) {
      const isSaved = await setNewPassword(newPass, email, hash);
      setIsChange(isSaved);
    }

  }

  return (
    <div className="recovery">
      <Header mainPage={true} />
      <main className="recovery_main">
        <h2 className="recovery_main__header1">Введите новый пароль</h2>
        {
            isChange ?
            <>
              <p>
                Ваш пароль успешно изменен.
              </p>
              <Button onClick={() => props.history.push('/')} title="На главную" />
            </>
            :
              <form className="recovery_main__form">

                <p>
                  Введите свой новый пароль.
                </p>
                <Input value={newPass} type="password" onChange={(event) => setNewPass(event.target.value)} placeholder="Введите ваш новый пароль..." name="pass"/>
                <br></br>
                {
                  isValid ? 
                    <Input value={repeatPass} type="password" onChange={(event) => setRepeatPass(event.target.value)} placeholder="Повторите ваш новый пароль..." name="pass"/>
                  :
                  <>
                    <p className="wrong_pass">
                      Пароли должны совпадать
                      <br />
                    <Input value={repeatPass} type="password" onChange={(event) => setRepeatPass(event.target.value)} placeholder="Повторите ваш новый пароль..." name="pass"/>
                    </p>
                  </>
                }      
                <br></br>
                <Button onClick={changePass} title="Сохранить" />
              </form>
          }
      </main>
    </div>
  );
}

export default NewPass;
