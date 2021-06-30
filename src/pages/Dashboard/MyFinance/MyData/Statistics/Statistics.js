import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

import './Statistics.scss';

const Statistics = props => {
  const { t } = useTranslation();
  const total = props.incomes - props.costs;

  return (
    <div className="stat_box">
      <h3 className="stat_box__header">{t('data.statInThisMonth')}</h3>
      <p className="stat_box__item">{t('data.spend')}: {props.currency} {props.costs}</p>
      <p className="stat_box__item">{t('data.recive')}: {props.currency} {props.incomes}</p>
      <p className="stat_box__item">{t('data.diff')}: {props.currency} {total}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    balance: state.user.balance,
    costs: state.costs.costsByPeriod,
    incomes: state.income.incomesByPeriod,
    currency: state.user.settings.currency
  }
}

export default connect(mapStateToProps)(Statistics);
