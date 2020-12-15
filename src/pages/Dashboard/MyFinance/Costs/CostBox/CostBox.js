import React from 'react';
import { useTranslation } from 'react-i18next';

import CostItem from './CostItem/CostItem';

import {formateDate} from '../../../../../helpers';

import './CostBox.scss';

const CostBox = props => {
  const { t } = useTranslation();

  return (
    <div className="myFin_mainBox">
      <span className="myFin_mainBox__date">{formateDate(props.item.period)}</span>
      <span className="myFin_mainBox__spentByMonth">{t('costs.inThisMounth')}: {props.item.spentByThisMonth}</span>
      <span className="myFin_mainBox__spentByDay">{t('costs.today')}: {props.item.spentByDay}</span>
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
