import React from 'react';
import {connect} from 'react-redux';

import MyGroupBoxItem from './MyGroupBoxItem/MyGroupBoxItem';
import { deleteGroup, deleteSource } from '../../services';

import './MyGroupBox.scss';

const MyGroupBox = props => {
  const [msg, setMsg] = React.useState('');

  async function deleteGroupCost(target) {
    const is_delete = await deleteGroup(target.dataset.itemId, props.token, setMsg);
    if (is_delete) {
      target.parentNode.style = "text-decoration: line-through";
      target.remove();
    }
  }

  async function deleteSourceIncome(target) {
    const is_delete = await deleteSource(target.dataset.itemId, props.token, setMsg);
    if (is_delete) {
      target.parentNode.style = "text-decoration: line-through";
      target.remove();
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
          title="Группы расходов"
        />
        <MyGroupBoxItem
          type="incomes"
          groups={props.incomeSources || []}
          token={props.token}
          currancy={props.currency}
          onDelete={deleteSourceIncome}
          title="Источники доходов"
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


export default connect(mapStateToProps)(MyGroupBox);
