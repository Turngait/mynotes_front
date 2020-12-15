import React from 'react';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';

import Heading1 from '../../../../components/Heading1/Heading1';
import Button from '../../../../components/Button1/Button1';
import Input2 from '../../../../components/Input2/Input2';
import IncomeBox from './IncomeBox/IncomeBox';
import AddIncome from './AddIncomes/AddIncomes';

import {getIncomeForPeriod} from '../../../../store/Incomes/income.action';

import './Incomes.scss';

const Incomes = props => {
  const { t } = useTranslation();
  const [isAddIncomeOpen, setIsAddIncomeOpen] = React.useState(false);

  return (
    <>
      {isAddIncomeOpen ? <AddIncome setIsAddIncomeOpen={setIsAddIncomeOpen}/> : null}
      <div className="myFin_headerBox">
        <Heading1 title={t('incomes.header')} />
          <div className="myFin_headerBox__btnBox">
            <Input2 onChange={(event) => props.getIncomeForPeriod({period:event.target.value, token: props.token})} value={props.incomePeriod} type="month" name="date"/>
            <Button onClick={setIsAddIncomeOpen} title={t('incomes.addIncome')} />
          </div>
      </div>
      {
        props.incomeItems.length > 0 ?
        props.incomeItems.map((income, key) => {
          return (
            <IncomeBox {...income} key={key} />
          )
        })
        :
          <p className="myFin__noContent">{t('incomes.noIncomes')}</p>
      }
    </>
  );
};

function mapStateToprops(state) {
  return {
    incomePeriod: state.income.incomePeriod,
    incomeItems: state.income.incomes,
    token: state.user.token
  }
}

function mapDispatchToprops (dispatch) {
  return {
    getIncomeForPeriod: (data) => dispatch(getIncomeForPeriod(data))
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Incomes);
