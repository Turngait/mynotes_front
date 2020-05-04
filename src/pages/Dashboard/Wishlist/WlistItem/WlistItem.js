import React from 'react';
import {connect} from 'react-redux';
import {deleteWlistItem} from '../../../../store/Wlist/wlist.actions';
import {formateDate} from '../../../../helpers';

const WlistItem = props => {
  return (
    <div className="wList_main_box__items_box__item">
      <div className="wList_main_box__items_box__item_header">
        <span className="wList_main_box__items_box__item_header__info">{props.item.name}</span>
        <span className="wList_main_box__items_box__item_header__info">{formateDate(props.item.date)}</span>
        <span className="wList_main_box__items_box__item_header__info">Priority {props.item.priority}</span>
        <span className="wList_main_box__items_box__item_header__info">Group: {props.item.group}</span>
        <span className="wList_main_box__items_box__item_header__info">Price: {props.item.price}</span>
        <span className="wList_main_box__items_box__item_header__control"><i className="fas edit fa-edit"></i> <i onClick={(event) => props.deleteWlistItem({target: event.target, token: props.token})} data-item-id={props.item._id} className="wList_main_box__items_box__item_del fas fa-times"></i></span>
      </div>
      <p className="wList_main_box__items_box__item_text">
        {props.item.text}
        <a href="ya.ru" className="wList_main_box__items_box__link">Link</a>
      </p>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    token: state.user.token
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteWlistItem: (item) => dispatch(deleteWlistItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WlistItem);
