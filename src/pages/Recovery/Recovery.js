import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header/Header';
import Input from '../../components/Input1/Input1';
import Button from '../../components/Button1/Button1';

import { sendMessage } from './services';

import './Recovery.scss';

const Recovery = ({history}) => {
  const { t } = useTranslation();

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
        <h2 className="recovery_main__header1">{t('recovery.recoveryPass')}</h2>
        <form className="recovery_main__form">
          {
            !isSend ?
            <p>
              {t('recovery.recText1')}
              <br></br>
              {t('recovery.recText2')}
            </p>
            :
            <p>
              <b>{t('recovery.messageSended')}</b>
            </p>
          }

          <Input value={email} type="email" onChange={(event) => setEmail(event.target.value)} placeholder={t('index.yourEmail')} name="email"/>
          <div className="recovery_main__form__btnsBox">
            <Button onClick={recover} title={t('recovery.recBtn')} />
            <Button onClick={goToMain} title={t('common.goBackBtn')} />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Recovery;
