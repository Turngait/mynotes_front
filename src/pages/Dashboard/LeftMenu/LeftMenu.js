import React from 'react';
import './LeftMenu.scss';
import { connect } from 'react-redux';
import { openFinance, openWlist } from '../../../store/Dashboard/dashboard.actions';
import { openCosts, openIncomes } from '../../../store/Finance/finance.actions';

const LeftMenu = (props) => {
  return (
    <ul className="LeftMenu_box">
      <li className="LeftMenu_box__item">
        {
          props.financeOpen ? 
          <>
            <button onClick={props.openFinance} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">MyFinances</button>
            {
              props.isCostOpen ?
                <button onClick={props.openCosts} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu LeftMenu_box__item_btn_active">Costs</button>
              :
                <button onClick={props.openCosts} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu">Costs</button>
            }
            {
              props.isIncomesOpen ?
              <button onClick={props.openIncomes} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu LeftMenu_box__item_btn_active">Incomes</button>
              :
                <button onClick={props.openIncomes} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu">Incomes</button>
            }
          </>
          :
            <button onClick={props.openFinance} className="LeftMenu_box__item_btn">MyFinances</button>
        }
        
      </li>
      <li className="LeftMenu_box__item">
        {
          props.wlistOpen
          ?
          <button onClick={props.openWlist} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">WishList</button>
          :
          <button onClick={props.openWlist} className="LeftMenu_box__item_btn">WishList</button>
        }
      </li>
      {/* <li className="LeftMenu_box__item"><button href="/todolist" className="LeftMenu_box__item_btn">ToDoList</button></li>
      <li className="LeftMenu_box__item"><button href="/notes" className="LeftMenu_box__item_btn">Notes</button></li> */}
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    wlistOpen: state.dashboard.wlistOpen,
    financeOpen: state.dashboard.financeOpen,
    isCostOpen: state.costs.isCostOpen,
    isIncomesOpen: state.costs.isIncomesOpen
  }
}

function mapDispatchToPRops(dispatch) {
  return {
    openWlist: () => dispatch(openWlist()),
    openFinance: () => dispatch(openFinance()),
    openCosts: () => dispatch(openCosts()),
    openIncomes: () => dispatch(openIncomes())
  }
}

export default connect(mapStateToProps, mapDispatchToPRops)(LeftMenu)
