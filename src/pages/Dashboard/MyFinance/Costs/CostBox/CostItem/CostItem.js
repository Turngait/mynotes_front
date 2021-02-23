import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

import {getCostItems} from 'store/Costs/costs.actions';
import {numberFormat} from 'utils';
import {deleteCostItemHook, getGroupId, showGroupName} from '../../hooks';

import './CostItem.scss';

const Costitem = props => {
  const group_name = showGroupName({item: props.item, groups:props.groups});
  const group_id = getGroupId({item: props.item, groups:props.groups});
  const { t } = useTranslation();

  return (
    <div className="CostItem">
      <div className="CostItem_header">
        <span className="CostItem_header__info CostItem_header__info__title">{props.item.title}</span>
        <span 
          onClick={() => props.filterCostsHandler(group_name, group_id)}
          className="CostItem_header__info filter_group">
          <b>{t("costs.group")}</b>: {group_name}
        </span>
        <span className="CostItem_header__control">
          <span className="CostItem_header__info">{numberFormat(props.item.amount)} {props.currency}</span>
          <i 
            onClick={(event) => deleteCostItemHook({target: event.target, token: props.token}, props.getCostItems)} 
            data-item-id={props.item._id} 
            className="fas deleteCostItem fa-times-circle">
          </i>
        </span>
      </div>
      {
        props.item.description ? 
        <p className="CostItem_text">
          {props.item.description}
        </p>
        :
        null
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    groups: state.costs.groups,
    token: state.user.token,
    period: state.user.month,
    currency: state.user.settings.currency
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCostItems: (token) => dispatch(getCostItems(token)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Costitem);
