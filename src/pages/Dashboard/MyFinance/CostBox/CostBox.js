import React from 'react';
import './CostBox.scss';
import CostItem from './CostItem/CostItem';
import {formateDate} from '../../../../helpers';


const CostBox = props => {
  return (
    <div className="myFin_mainBox">
      <span className="myFin_mainBox__date">{formateDate(props.item.period)}</span>
      <span className="myFin_mainBox__spentByMonth">In this month: {props.item.spentByThisMonth}</span>
      <span className="myFin_mainBox__spentByDay">Today: {props.item.spentByDay}</span>
      {
        props.item.items.length > 0 ?
        props.item.items.map((item, key) => {
          return (
            <CostItem key={key} item={item} />
          );
        })
        : null
      }
    </div>
  );
}

export default CostBox;
