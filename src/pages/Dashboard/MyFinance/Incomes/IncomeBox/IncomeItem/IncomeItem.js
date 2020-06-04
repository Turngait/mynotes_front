import React from 'react';
import './IncomeItem.scss';

const IncomeItem = props => {
  return (
    <div className="myFin_mainBox__item">
      <div className="myFin_mainBox__item_header">
        <span className="myFin_mainBox__item_header__info">RUR {props.amount}</span>
        <span className="myFin_mainBox__item_header__info">{props.title}</span>
        <span className="myFin_mainBox__item_header__control"><i className="fas deleteCostItem fa-times-circle"></i></span>
      </div>
      {
        props.text ?
          <p className="myFin_mainBox__item_text">{props.text}</p>
        :
          null
      }
    </div>
  );
};

export default IncomeItem;
