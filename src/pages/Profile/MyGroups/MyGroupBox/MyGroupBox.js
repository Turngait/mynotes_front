import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

import MyGroupBoxItem from './MyGroupBoxItem/MyGroupBoxItem';
import { deleteGroup, deleteSource } from '../../services';
import { setGroups } from 'store/Costs/costs.actions';
import { setSources } from 'store/Incomes/income.action';

import './MyGroupBox.scss';

const MyGroupBox = props => {
  const { t } = useTranslation();

  const [msg, setMsg] = React.useState('');

  async function deleteGroupCost(target) {  
    const is_delete = await deleteGroup(target.dataset.itemId, props.token, setMsg);
    if (is_delete) {
      const groups = props.costGroups.filter(item => item._id !== target.dataset.itemId);
      target.parentNode.style = "text-decoration: line-through";
      target.remove();
      setTimeout(() => props.setGroups(groups), 1400);
    }
  }

  async function deleteSourceIncome(target) {
    const is_delete = await deleteSource(target.dataset.itemId, props.token, setMsg);
    if (is_delete) {
      const groups = props.incomeSources.filter(item => item._id !== target.dataset.itemId);
      target.parentNode.style = "text-decoration: line-through";
      target.remove();
      setTimeout(() => props.setSources(groups), 1400);

    }
  }

  return (
    <>
      {
        msg.length > 0 ?
          <p className="myGroupBox__msg">{msg}</p>
        : 
          null
      }
      <div className="myGroupBox">
        <MyGroupBoxItem
          type="costs"
          setMsg={setMsg}
          groups={props.costGroups || []}
          token={props.token}
          currancy={props.currency}
          onDelete={deleteGroupCost}
          title={t('settings.costGroups')}
        />
        <MyGroupBoxItem
          type="incomes"
          groups={props.incomeSources || []}
          token={props.token}
          currancy={props.currency}
          onDelete={deleteSourceIncome}
          title={t('settings.incomeSrc')}
        />
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    costGroups: state.costs.groups,
    incomeSources: state.income.sources,
    currency: state.user.settings.currency,
    token: state.user.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setGroups: (groups) => dispatch(setGroups(groups)),
    setSources: (sources) => dispatch(setSources(sources))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyGroupBox);
