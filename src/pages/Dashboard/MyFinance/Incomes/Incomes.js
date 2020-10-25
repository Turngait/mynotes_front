import React from 'react';
import { useTranslation } from 'react-i18next';

import './Incomes.scss';
import Heading1 from '../../../../components/Heading1/Heading1';
import Button from '../../../../components/Button1/Button1';
import Input2 from '../../../../components/Input2/Input2';
import IncomeBox from './IncomeBox/IncomeBox';
import AddIncome from './AddIncomes/AddIncomes';
import {connect} from 'react-redux';
import {openAddIncome, getIncomeForPeriod} from '../../../../store/Incomes/income.action';



const Incomes = props => {
  const { t } = useTranslation();

  return (
    <>
      {
        props.addIncomeOpen
        ?
          <AddIncome />
        :
          null
      }
      <div className="myFin_headerBox">
        <Heading1 title={"MyFinance: " + t('incomes.header')} />
        <div>
            <Input2 onChange={(event) => props.getIncomeForPeriod({period:event.target.value, token: props.token})} value={props.incomePeriod} type="month" name="date"/>
          </div>
          <div>
            <Button onClick={props.openAddIncome} title={t('incomes.addIncome')} />
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
    addIncomeOpen: state.income.addIncomeOpen,
    incomePeriod: state.income.incomePeriod,
    incomeItems: state.income.incomes,
    token: state.user.token
  }
}

function mapDispatchToprops (dispatch) {
  return {
    openAddIncome: () => dispatch(openAddIncome()),
    getIncomeForPeriod: (data) => dispatch(getIncomeForPeriod(data))
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Incomes);
