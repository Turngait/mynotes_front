import React from 'react';
import './IncomeBox.scss';
import IncomeItem from './IncomeItem/IncomeItem';
// import {formateDate} from '../../../../../helpers';


const IncomeBox = props => {
  return (
    <>
      <div className="myFin_mainBox">
        <span className="myFin_mainBox__date">2020</span>
        <span className="myFin_mainBox__spentByMonth">In this month: 20</span>
        <span className="myFin_mainBox__spentByDay">Today: 20</span>
      </div>
      <IncomeItem />
    </>
  );
};

export default IncomeBox;
