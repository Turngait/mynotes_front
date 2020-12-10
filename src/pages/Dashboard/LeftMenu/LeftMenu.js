import React from 'react';
import './LeftMenu.scss';
import { connect } from 'react-redux';
import { openFinance} from '../../../store/Dashboard/dashboard.actions';
import { openCosts, openIncomes } from '../../../store/Finance/finance.actions';
import { useTranslation } from 'react-i18next';


const LeftMenu = (props) => {
  const { t } = useTranslation();

  return (
    <ul className="LeftMenu_box">
      <li className="LeftMenu_box__item">
        {
          props.financeOpen ? 
          <>
            <button onClick={props.openFinance} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">MyFinances</button>
            {
              props.isCostOpen ?
                <button onClick={props.openCosts} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu LeftMenu_box__item_btn_active">{t("costs.header")}</button>
              :
                <button onClick={props.openCosts} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu">{t("costs.header")}</button>
            }
            {
              props.isIncomesOpen ?
              <button onClick={props.openIncomes} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu LeftMenu_box__item_btn_active">{t("incomes.header")}</button>
              :
                <button onClick={props.openIncomes} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu">{t("incomes.header")}</button>
            }
          </>
          :
            <button onClick={props.openFinance} className="LeftMenu_box__item_btn">MyFinances</button>
        }
        
      </li>
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    financeOpen: state.dashboard.financeOpen,
    isCostOpen: state.costs.isCostOpen,
    isIncomesOpen: state.costs.isIncomesOpen
  }
}

function mapDispatchToPRops(dispatch) {
  return {
    openFinance: () => dispatch(openFinance()),
    openCosts: () => dispatch(openCosts()),
    openIncomes: () => dispatch(openIncomes())
  }
}

export default connect(mapStateToProps, mapDispatchToPRops)(LeftMenu)
