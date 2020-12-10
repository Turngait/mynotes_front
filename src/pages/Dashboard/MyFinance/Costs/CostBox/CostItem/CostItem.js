import React from 'react';
import './CostItem.scss';
import {connect} from 'react-redux';
import {showGroupName, getGroupId, deleteCostItem, costGroupFilter} from '../../../../../../store/Costs/costs.actions';
import { useTranslation } from 'react-i18next';


const Costitem = props => {
  const group_name = props.showGroupName({item: props.item, groups:props.groups});
  const group_id = props.getGroupId({item: props.item, groups:props.groups});
  const { t } = useTranslation();

  return (
    <div className="myFin_mainBox__item">
      <div className="myFin_mainBox__item_header">
        <span className="myFin_mainBox__item_header__info">{props.currency} {props.item.amount}</span>
        <span className="myFin_mainBox__item_header__info">{props.item.title}</span>
        <span onClick={() => props.costGroupFilter({id_group: group_id, period: props.period, token: props.token})} className="myFin_mainBox__item_header__info filter_group">
          {t("costs.group")}: {group_name}
        </span>
        <span className="myFin_mainBox__item_header__control"><i onClick={(event) => props.deleteCostItem({target: event.target, token: props.token})} data-item-id={props.item._id} className="fas deleteCostItem fa-times-circle"></i></span>
      </div>
      {
        props.item.description ? 
        <p className="myFin_mainBox__item_text">
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
    period: state.costs.costPeriod,
    currency: state.user.settings.currency
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showGroupName: (data) => dispatch(showGroupName(data)),
    getGroupId: (data) => dispatch(getGroupId(data)),
    deleteCostItem: (data) => dispatch(deleteCostItem(data)),
    costGroupFilter: (data) => dispatch(costGroupFilter(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Costitem);
