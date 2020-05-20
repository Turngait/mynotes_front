import React from 'react'
import './LeftMenu.scss'
import { connect } from 'react-redux'
import { openFinance, openWlist } from '../../../store/Dashboard/dashboard.actions'

const LeftMenu = (props) => {
  return (
    <ul className="LeftMenu_box">
      <li className="LeftMenu_box__item">
        {
          props.financeOpen ? 
          <>
            <button onClick={props.openFinance} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">MyFinances</button>
            <button onClick={props.openFinance} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu">Costs</button>
            <button onClick={props.openFinance} className="LeftMenu_box__item_btn LeftMenu_box__item_btn submenu">Incomes</button>
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
    financeOpen: state.dashboard.financeOpen
  }
}

function mapDispatchToPRops(dispatch) {
  return {
    openWlist: () => dispatch(openWlist()),
    openFinance: () => dispatch(openFinance())
  }
}

export default connect(mapStateToProps, mapDispatchToPRops)(LeftMenu)
