import React from "react";
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

import Statistics from "./Statistics/Statistics";
import InputDataPicker from "components/Input2/Input2";

import "./index.scss";

const MyData = props => {
  const { t } = useTranslation();

  return (
    <>
      <div className="myFin_headerBox">
        <div className="myFin_headerBox__periodAmount">
          {t('budgets.balance')}: {props.total} {props.currency}
        </div>
        <div>
          <InputDataPicker
            onChange={(event) =>
              props.getFinDataByPeriod(event.target.value)
            }
            value={props.period}
            type="month"
            name="date"
          />
        </div>
      </div>
      <div className="profileBox">
        <Statistics />
      </div>
    </>
  );
};
function mapStateToProps (state) {
  return {
    period: state.user.month,
    incomeItems: state.income.incomes,
    token: state.user.token,
    currency: state.user.settings.currency
  }
}
export default connect(mapStateToProps, null)(MyData);
