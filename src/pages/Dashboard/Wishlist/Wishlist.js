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
          {
            props.wlists ?
            props.wlists.map((item, key) => {
              return (
                <div key={key} className="wList_main_box__items_box__item">
                  <div className="wList_main_box__items_box__item_header">
                    <span className="wList_main_box__items_box__item_header__info">{item.name}</span>
                    <span className="wList_main_box__items_box__item_header__info">02.10.2019</span>
                    <span className="wList_main_box__items_box__item_header__info">Priority {item.priority}</span>
                    <span className="wList_main_box__items_box__item_header__info">Group: {item.group}</span>
                    <span className="wList_main_box__items_box__item_header__info">Price: {item.price}</span>
                    <span className="wList_main_box__items_box__item_header__control"><i className="fas edit fa-edit"></i> <i className="wList_main_box__items_box__item_del fas fa-times"></i></span>
                  </div>
                  <p className="wList_main_box__items_box__item_text">
                    {item.text}
                    <a href="ya.ru" className="wList_main_box__items_box__link">Link</a>
                  </p>
                </div>
              )
            })
            :
            <p>No wishlist's items</p>
          }

        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    wlistOpen: state.wlist.wlistOpen,
    wlists: state.wlist.wlist
  }
}

function mapDispatchToProps (dispatch) {
  return {
    wlistOpenF: () => dispatch(wlistOpen()),
    wlistCloseF: () => dispatch(wlistClose())
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
