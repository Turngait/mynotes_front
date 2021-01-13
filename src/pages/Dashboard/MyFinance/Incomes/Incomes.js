import React from 'react';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';

import Button from '../../../../components/Button1/Button1';
import Input2 from '../../../../components/Input2/Input2';
import IncomeBox from './IncomeBox/IncomeBox';
import AddIncome from './AddIncomes/AddIncomes';
import AddSource from './AddSource';
import FilteredCosts from 'components/FilteredItems';

import {getIncomeForPeriod, setIncomes} from '../../../../store/Incomes/income.action';
import {incomesFilterHook} from '../../hooks';

import './Incomes.scss';

const Incomes = props => {
  const { t } = useTranslation();
  const [isAddIncomeOpen, setIsAddIncomeOpen] = React.useState(false);
  const [isAddSourceOpen, setIsAddSourceOpen] = React.useState(false);
  const [isFilteredIncomesOpen, setIsFilteredIncomesOpen] = React.useState(false);

  const [filteredIncomes, setFilteredIncomes] = React.useState([]);
  const [filteredSource, setFilteredSource] = React.useState('');

  function filterIncomesHandler(sourceName, sourceId) {
    setFilteredSource(sourceName);
    setFilteredIncomes(incomesFilterHook(props.incomeItems, sourceId));
    setIsFilteredIncomesOpen(true);
  }


  return (
    <>
      {isAddIncomeOpen ? <AddIncome setIsAddIncomeOpen={setIsAddIncomeOpen}/> : null}
      {isAddSourceOpen ? <AddSource setIsAddSourceOpen={setIsAddSourceOpen}/> : null}
      {isFilteredIncomesOpen ? <FilteredCosts items={filteredIncomes} currancy={props.currency} period={props.incomePeriod} groupName={filteredSource} setIsFilteredItemsOpen={setIsFilteredIncomesOpen}/> : null}
      <div className="myFin_headerBox">
        <div>
          <Input2 onChange={(event) => props.getIncomeForPeriod({period:event.target.value, token: props.token})} value={props.incomePeriod} type="month" name="date"/>
        </div>
        <div className="myFin_headerBox__btnBox">
          <Button onClick={setIsAddIncomeOpen} title={t('incomes.addIncome')} />
          <Button onClick={setIsAddSourceOpen} title={"Добавить источник"} />
        </div>
      </div>
      {
        props.incomeItems.length > 0 ?
        props.incomeItems.map((income, key) => {
          return (
            <IncomeBox filterIncomesHandler={filterIncomesHandler} {...income} key={key} />
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
    incomePeriod: state.user.month,
    incomeItems: state.income.incomes,
    token: state.user.token,
    currency: state.user.settings.currency
  }
}

function mapDispatchToprops (dispatch) {
  return {
    getIncomeForPeriod: (data) => dispatch(getIncomeForPeriod(data)),
    setIncomes: (data) => dispatch(setIncomes(data)),
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Incomes);
