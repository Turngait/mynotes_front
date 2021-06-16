import React from 'react';
import { useTranslation } from 'react-i18next';

import './LeftMenu.scss';

const LeftMenu = (props) => {
  const { t } = useTranslation();

  return (
    <div className="LeftMenu_box">
      <div className="LeftMenu_box__item">
        {
          props.dataOpen ?
            <button onClick={props.openDataHandler} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">Статистика</button>
          :
            <button onClick={props.openDataHandler} className="LeftMenu_box__item_btn">Статистика</button>
        }
        {
          props.costOpen ?
            <button onClick={props.openCostHandler} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">{t("costs.header")}</button>
          :
            <button onClick={props.openCostHandler} className="LeftMenu_box__item_btn">{t("costs.header")}</button>
        }
        {
          props.incomeOpen ?
            <button onClick={props.openIncomeHandler} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">{t("incomes.header")}</button>
          :
            <button onClick={props.openIncomeHandler} className="LeftMenu_box__item_btn">{t("incomes.header")}</button>
        }
        {
          props.budgetsOpen ?
            <button onClick={props.openBudgetsHandler} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">{t("budgets.header")}</button>
          :
            <button onClick={props.openBudgetsHandler} className="LeftMenu_box__item_btn">{t("budgets.header")}</button>
        }
      </div>

      <div className="LeftMenu_box__info">
        Ваш баланс
        <br/>
        {props.balance} {props.currancy}
      </div>
    </div>
  )
}

export default LeftMenu;
