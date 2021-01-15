import React from 'react';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';

import CostItem from './CostItem/CostItem';

import {numberFormat, formateDate} from 'utils';

import './CostBox.scss';

const CostBox = props => {
  const { t } = useTranslation();

  return (
    <div className="CostBox">
      <div className="CostBox__costInfo">
        <p className="CostBox__costInfo__date">{formateDate(props.item.period, 'long')}</p>
        <p className="CostBox__costInfo__spentByDay">{t('costs.today')}: {numberFormat(props.item.spentByDay)} {props.currency}</p>
      </div>
      <div className="CostBox__costItems">
        {
          props.item.items.length > 0 ? props.item.items.map((item, key) => {
            return (<CostItem filterCostsHandler={props.filterCostsHandler} key={key} item={item} />);
          })
          : null
        }
      </div>

    </div>
  );
}

function mapStateToProps(state) {
  return {
    currency: state.user.settings.currency
  }
}

export default connect(mapStateToProps, null)(CostBox);
