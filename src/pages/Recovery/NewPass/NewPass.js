import React, {useState, useEffect} from 'react';
import '../Recovery.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Input1 from '../../../components/Input1/Input1';
import Button1 from '../../../components/Button1/Button1';
import {API_URL} from '../../../config/api';

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

  function changePass() {
    const {email, hash} = props.match.params;

    if(isValid && newPass) {
      fetch(API_URL + '/auth/setnewpass', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          pass: newPass,
          email,
          hash
        })
      })
      .then(res => {
        if(res.status === 204) {
          setIsChange(true);
        }
      })
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
              <Button1 onClick={() => props.history.push('/')} title="На главную" />
            </>
            :
              <form className="recovery_main__form">

                <p>
                  Введите свой новый пароль.
                </p>
                <Input1 value={newPass} type="password" onChange={(event) => setNewPass(event.target.value)} placeholder="Введите ваш новый пароль..." name="pass"/>
                <br></br>
                {
                  isValid ? 
                    <Input1 value={repeatPass} type="password" onChange={(event) => setRepeatPass(event.target.value)} placeholder="Введите ваш новый пароль..." name="pass"/>
                  :
                  <>
                    <p className="wrong_pass">
                      Пароли должны совпадать
                      <br />
                    <Input1 value={repeatPass} type="password" onChange={(event) => setRepeatPass(event.target.value)} placeholder="Введите ваш новый пароль..." name="pass"/>
                    </p>
                  </>
                }      
                <br></br>
                <Button1 onClick={changePass} title="Сохранить" />
              </form>
          }
        
      </main>
      <Footer />
    </div>
  );
}

export default NewPass;
