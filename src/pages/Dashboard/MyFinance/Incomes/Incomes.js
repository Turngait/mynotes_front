import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import Loader from "components/Loader";
import InputDataPicker from "components/Input2/Input2";
import IncomeBox from "./IncomeBox/IncomeBox";
import AddIncome from "./AddIncomes/AddIncomes";
import AddSource from "./AddSource";
import FilteredCosts from "components/FilteredItems";

import {
  incomesFilterHook,
  saveIncome,
  saveSource,
  deleteIncome,
} from "./services";

import "./Incomes.scss";

const Incomes = (props) => {
  const { t } = useTranslation();
  const [isAddIncomeOpen, setIsAddIncomeOpen] = React.useState(false);
  const [isAddSourceOpen, setIsAddSourceOpen] = React.useState(false);
  const [isFilteredIncomesOpen, setIsFilteredIncomesOpen] =
    React.useState(false);

  const [filteredIncomes, setFilteredIncomes] = React.useState([]);
  const [filteredSource, setFilteredSource] = React.useState("");

  function filterIncomesHandler(sourceName, sourceId) {
    setFilteredSource(sourceName);
    setFilteredIncomes(incomesFilterHook(props.incomeItems, sourceId));
    setIsFilteredIncomesOpen(true);
  }

  return (
    <div className="incomes">
      {props.isLoading ? (
        <Loader />
      ) : (
        <>
          {isAddIncomeOpen ? (
            <AddIncome
              saveIncome={saveIncome}
              openAddSource={setIsAddSourceOpen}
              setIsAddIncomeOpen={setIsAddIncomeOpen}
            />
          ) : null}
          {isAddSourceOpen ? (
            <AddSource
              saveSource={saveSource}
              setIsAddSourceOpen={setIsAddSourceOpen}
            />
          ) : null}
          {isFilteredIncomesOpen ? (
            <FilteredCosts
              items={filteredIncomes}
              currancy={props.currency}
              period={props.incomePeriod}
              groupName={filteredSource}
              setIsFilteredItemsOpen={setIsFilteredIncomesOpen}
            />
          ) : null}
          <div className="myFin_headerBox">
            <div className="myFin_headerBox__periodAmount">
              {t('common.inThisMonth')}: {props.periodAmount} {props.currency}
            </div>
            <div>
              <InputDataPicker
                onChange={(event) =>
                  props.getFinDataByPeriod(event.target.value)
                }
                value={props.incomePeriod}
                type="month"
                name="date"
              />
            </div>
          </div>
          <div className="allIncomes">
            {props.incomeItems.length > 0 ? (
              props.incomeItems.map((income, key) => {
                return (
                  <IncomeBox
                    deleteIncome={deleteIncome}
                    filterIncomesHandler={filterIncomesHandler}
                    {...income}
                    key={key}
                  />
                );
              })
            ) : (
              <p className="myFin__noContent">{t("incomes.noIncomes")}</p>
            )}
          </div>
          <button
            onClick={() => setIsAddIncomeOpen(true)}
            className="incomes__openAddCostBtn"
          >
            +
          </button>
        </>
      )}
    </div>
  );
};

function mapStateToprops(state) {
  return {
    incomePeriod: state.user.month,
    incomeItems: state.income.incomes,
    token: state.user.token,
    currency: state.user.settings.currency,
    periodAmount: state.income.incomesByPeriod
  };
}

export default connect(mapStateToprops, null)(Incomes);
