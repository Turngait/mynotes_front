import React from 'react';
import './CostItem.scss';
import {connect} from 'react-redux';
import {showGroupName, deleteCostItem} from '../../../../../../store/Finance/finance.actions';


const Costitem = props => {
  const group_name = props.showGroupName({item: props.item, groups:props.groups});

  return (
    <div className="myFin_mainBox__item">
      <div className="myFin_mainBox__item_header">
        <span className="myFin_mainBox__item_header__info">RUR {props.item.amount}</span>
        <span className="myFin_mainBox__item_header__info">{props.item.title}</span>
        <span className="myFin_mainBox__item_header__info">Group: {group_name}</span>
        <span className="myFin_mainBox__item_header__control"><i onClick={(event) => props.deleteCostItem({target: event.target, token: props.token})} data-item-id={props.item._id} className="fas deleteCostItem fa-times-circle"></i></span>
      </div>
      {
        props.item.descrition ? 
        <p className="myFin_mainBox__item_text">
          {props.item.descrition}
        </p>
        :
        null
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    groups: state.finance.groups,
    token: state.user.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showGroupName: (data) => dispatch(showGroupName(data)),
    deleteCostItem: (data) => dispatch(deleteCostItem(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Costitem);
