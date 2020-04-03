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
        <div className="wList_main_box__items_box">
          <div className="wList_main_box__items_box__item">
            <div className="wList_main_box__items_box__item_header">
              <span className="wList_main_box__items_box__item_header__info">3. Item name.</span>
              <span className="wList_main_box__items_box__item_header__info">02.10.2019</span>
              <span className="wList_main_box__items_box__item_header__info">Priority 3</span>
              <span className="wList_main_box__items_box__item_header__info">Group: Name</span>
              <span className="wList_main_box__items_box__item_header__info">Price: 20 000</span>
              <span className="wList_main_box__items_box__item_header__control"><i className="fas edit fa-edit"></i> <i className="fas fa-times"></i></span>
            </div>
            <p className="wList_main_box__items_box__item_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              <a href="ya.ru" className="wList_main_box__items_box__link">Link</a>
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
