import React from 'react';
import './IncomeBox.scss';
import IncomeItem from './IncomeItem/IncomeItem';
import {formateDate} from '../../../../../helpers';


const IncomeBox = props => {
  return (
    <>
      <div className="myFin_mainBox">
        <span className="myFin_mainBox__date">{formateDate(props.period)}</span>
        <span className="myFin_mainBox__spentByMonth">In this month: {props.incomeByThisMonth}</span>
        <span className="myFin_mainBox__spentByDay">Today: {props.incomeByDay}</span>
      </div>
      {
        props.items.length > 0 ?
          props.items.map((item, key) => {
            return (
              <IncomeItem {...item}/>
            )
          })
        :
          null
      }
    </>
  );
};

export default IncomeBox;
