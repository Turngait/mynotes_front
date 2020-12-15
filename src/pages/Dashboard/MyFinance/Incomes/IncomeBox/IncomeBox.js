import React from 'react';
import { useTranslation } from 'react-i18next';

import IncomeItem from './IncomeItem/IncomeItem';
import {formateDate} from '../../../../../helpers';

import './IncomeBox.scss';

const IncomeBox = props => {
  const { t } = useTranslation();

  return (
    <>
      <div className="myFin_mainBox">
        <span className="myFin_mainBox__date">{formateDate(props.period)}</span>
        <span className="myFin_mainBox__spentByMonth">{t('incomes.inThisMounth')}: {props.incomeByThisMonth}</span>
        <span className="myFin_mainBox__spentByDay">{t('incomes.today')}: {props.incomeByDay}</span>
      </div>
      {
        props.items.length > 0 ?
          props.items.map((item, key) => {
            return (
              <IncomeItem {...item} key={key}/>
            )
          })
        :
          null
      }
    </>
  );
};

export default IncomeBox;
