import React from 'react';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';

import PopUp from '../../../../../components/PopUp/PopUp';
import Input2 from '../../../../../components/Input2/Input2';
import ButtonPopUp from '../../../../../components/ButtonPopUp/ButtonPopUp';

import {saveGroup} from './hooks';

import {setCosts} from 'store/Costs/costs.actions';

import './AddGroup.scss';

const AddGroup = props => {
  const {token} = props;

  const { t } = useTranslation();
  const [group, setGroup] = React.useState('');
  const [error, setError] = React.useState('');

  async function addGroup() {
    const isAdd = await saveGroup(group, token, props.setCosts, setError);
    if(isAdd) {
      props.setIsAddCostGroupOpen(false);
    }
  }
  return (
    <PopUp>
      <i onClick={() => props.setIsAddCostGroupOpen(false)} className="fas fa-times close"></i>
      <h3 className="addItem_header">Добавить группу расходов</h3>
      <span className="errorsMsg">{error}</span>
      <form className="addItem_box">
        <Input2 onChange={(event) => setGroup(event.target.value)} type="text" name="name" placeholder={t('costs.groupName') + "..."} />
        <ButtonPopUp onClick={addGroup} type="button" title={t('costs.addBtn')} />
      </form>
    </PopUp>
  );
}

function mapStateToProps (state) {
  return {
    token: state.user.token
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setCosts: (data) => dispatch(setCosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);
