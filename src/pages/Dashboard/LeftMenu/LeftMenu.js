import React from 'react'
import './LeftMenu.scss'
import { connect } from 'react-redux'
import { openFinance, openWlist } from '../../../store/Dashboard/dashboard.actions'

const LeftMenu = (props) => {
  return (
    <ul className="LeftMenu_box">
      <li className="LeftMenu_box__item"><button onClick={props.openFinance} className="LeftMenu_box__item_btn">MyFinances</button></li>
      <li className="LeftMenu_box__item"><button onClick={props.openWlist} className="LeftMenu_box__item_btn">WishList</button></li>
      {/* <li className="LeftMenu_box__item"><button href="/todolist" className="LeftMenu_box__item_btn">ToDoList</button></li>
      <li className="LeftMenu_box__item"><button href="/notes" className="LeftMenu_box__item_btn">Notes</button></li> */}
    </ul>
  )
}

function mapDispatchToPRops(dispatch) {
  return {
    openWlist: () => dispatch(openWlist()),
    openFinance: () => dispatch(openFinance())
  }
}

export default connect(null, mapDispatchToPRops)(LeftMenu)
