import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

import PopUp from 'components/PopUp/PopUp';
import Input from 'components/Input2/Input2';
import ButtonPopUp from 'components/ButtonPopUp/ButtonPopUp';

import {setIncomes} from 'store/Incomes/income.action';

import './index.scss';

const AddSource = props => {
  const { t } = useTranslation();
  const [source, setSource] = React.useState('');
  const [error, setError] = React.useState('');

  async function addSource() {
    const isAdd = await props.saveSource(source, props.token, props.setIncomes, setError);
    if(isAdd) {
      props.setIsAddSourceOpen(false);
    }
  } 
  return (
    <PopUp>
      <i onClick={() => props.setIsAddSourceOpen(false)} className="fas fa-times close"></i>
      <h3 className="addItem_header">{t('incomes.addSource')}</h3>
      <span className="errorsMsg">{error}</span>
      <form className="addItem_box">
        <Input onChange={(event) => setSource(event.target.value)} type="text" name="name" placeholder={t('incomes.nameOfSource')} />
        <ButtonPopUp onClick={addSource} type="button" title={t('costs.addBtn')} />
      </form>
    </PopUp>
  )
}

function mapStateToProps (state) {
  return {
    token: state.user.token
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setIncomes: (data) => dispatch(setIncomes(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSource);
