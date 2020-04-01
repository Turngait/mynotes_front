import React from 'react'
import { connect } from 'react-redux'
import AddItem from './AddItem/AddItem'
import './Wishlist.scss'
import {wlistOpen, wlistClose} from '../../../store/Wlist/wlist.actions'

const Wishlist = props => {
  return (
    <>
      {props.wlistOpen ? <AddItem onClose={props.wlistCloseF}/> : null }
      <div className="wList_headerBox">
        <h3 className="wList_headerBox__logo">Wishlist</h3>
        <p className="wList_headerBox__sorting">
          Sort by: 
          <button className="wList_headerBox__sortBtn"><i className="fas fa-caret-up"></i>priority</button>
          <button className="wList_headerBox__sortBtn"><i className="fas fa-caret-up"></i>status</button>
          <button className="wList_headerBox__sortBtn"><i className="fas fa-caret-up"></i>group</button>
          <button className="wList_headerBox__sortBtn"><i className="fas fa-caret-up"></i>date</button>
        </p>
        <button onClick={props.wlistOpenF} className="wList_headerBox__addButton">Add</button>
      </div>

      <div className="wList_main_box">
        <div className="wList_main_box__filter_box">
          <select className="wList_main_box__filter_box__item" placeholder="Groups...">
            <option>Group1</option>
            <option>Group2</option>
          </select>

          <select className="wList_main_box__filter_box__item" placeholder="Priority...">
            <option>Group1</option>
            <option>Group2</option>
          </select>

          <select className="wList_main_box__filter_box__item" placeholder="Status...">
            <option>Group1</option>
            <option>Group2</option>
          </select>
        </div>

        <div className="wList_main_box__items_box">
          <div className="wList_main_box__items_box__item">
            <div className="wList_main_box__items_box__item_header">
              3. Item name. Priority: 3 Group: Name  Status: in progress <i className="fas fa-edit"></i> <i className="fas fa-times"></i>
            </div>
            <p className="wList_main_box__items_box__item_text">
              <span className="wList_main_box__items_box__item_text_data">02.10.2019</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    wlistOpen: state.wlist.wlistOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    wlistOpenF: () => dispatch(wlistOpen()),
    wlistCloseF: () => dispatch(wlistClose())
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
