import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../../../components/Header/Header';
import Input from '../../../components/Input1/Input1';
import Button from '../../../components/Button1/Button1';

import { setNewPassword } from '../services';

import '../Recovery.scss';

const NewPass = props => {
  const { t } = useTranslation();

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
        <h2 className="recovery_main__header1">{t('recovery.newPass')}</h2>
        {
            isChange ?
            <>
              <p>
                {t('recovery.passChanged')}
              </p>
              <Button onClick={() => props.history.push('/')} title={t('recovery.toMainBtn')} />
            </>
            :
              <form className="recovery_main__form">
                <Input value={newPass} type="password" onChange={(event) => setNewPass(event.target.value)} placeholder={t('recovery.newPass') + "..."} name="pass"/>
                <br></br>
                {
                  isValid ? 
                    <Input value={repeatPass} type="password" onChange={(event) => setRepeatPass(event.target.value)} placeholder={t('recovery.repeatPass')} name="pass"/>
                  :
                  <>
                    <p className="wrong_pass">
                      {t('recovery.passEror')}
                      <br />
                    <Input value={repeatPass} type="password" onChange={(event) => setRepeatPass(event.target.value)} placeholder={t('recovery.repeatPass')} name="pass"/>
                    </p>
                  </>
                }      
                <br></br>
                <Button onClick={changePass} title={t('common.saveBtn')} />
              </form>
          }
      </main>
    </div>
  );
}

export default NewPass;
