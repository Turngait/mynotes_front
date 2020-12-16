import React from 'react';
import { useTranslation } from 'react-i18next';

import './LeftMenu.scss';

const LeftMenu = (props) => {
  const { t } = useTranslation();

  return (
    <ul className="LeftMenu_box">
      <li className="LeftMenu_box__item">
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
      </li>
    </ul>
  )
}

export default LeftMenu;
