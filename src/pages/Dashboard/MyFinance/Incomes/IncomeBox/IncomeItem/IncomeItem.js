import React from 'react';
import './IncomeItem.scss';

const IncomeItem = props => {
  return (
    <div className="myFin_mainBox__item">
      <div className="myFin_mainBox__item_header">
        <span className="myFin_mainBox__item_header__info">RUR 2000</span>
        <span className="myFin_mainBox__item_header__info">Title</span>
        <span className="myFin_mainBox__item_header__control"><i className="fas deleteCostItem fa-times-circle"></i></span>
      </div>
      <p className="myFin_mainBox__item_text">Text</p>
    </div>
  );
};

export default IncomeItem;
