import React from 'react';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';

import IncomeItem from './IncomeItem/IncomeItem';
import {formateDate} from '../../../../../helpers';

import './IncomeBox.scss';

const IncomeBox = props => {
  const { t } = useTranslation();

  return (
    <div className="IncomeBox">
      <div className="IncomeBox__infoBox">
        <p className="IncomeBox__infoBox__date">{formateDate(props.period)}</p>
        <p className="IncomeBox__infoBox__spentByDay">{t('incomes.today')}: {props.currency} {props.gainByDay}</p>
      </div>
      <div className="IncomeBox__incomeItems">
        {
          props.items.length > 0 ? props.items.map((item, key) => {
              return (<IncomeItem {...item} key={key}/>);
            })
          :
            null
        }
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currency: state.user.settings.currency
  }
}

export default connect(mapStateToProps, null)(IncomeBox);
