import React from 'react'
import { connect } from 'react-redux'
import AddItem from './AddItem/AddItem'
import AddGroup from './AddGroup/AddGroup'
import './Wishlist.scss'
import {wlistOpen, wlistClose, wGroupOpen, wGroupClose, deleteWlistItem} from '../../../store/Wlist/wlist.actions'

const Wishlist = props => {
  return (
    <>
      {props.wlistOpen ? <AddItem onClose={props.wlistCloseF}/> : null }
      {props.wlistGroupOpen ? <AddGroup onClose={props.wGroupCloseF}/> : null }
      <div className="wList_headerBox">
        <h3 className="wList_headerBox__logo">Wishlist</h3>
        <p className="wList_headerBox__sorting">
          Sort by: 
          <button className="wList_headerBox__sortBtn"><i className="fas fa-caret-up"></i>priority</button>
          <button className="wList_headerBox__sortBtn"><i className="fas fa-caret-up"></i>status</button>
          <button className="wList_headerBox__sortBtn"><i className="fas fa-caret-up"></i>group</button>
          <button className="wList_headerBox__sortBtn"><i className="fas fa-caret-up"></i>date</button>
        </p>
        <div>
          <button onClick={props.wlistOpenF} className="wList_headerBox__addButton">Add Item</button>
          <button onClick={props.wGroupOpenF} className="wList_headerBox__addButton">Add Group</button>
        </div>
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
                    <span className="wList_main_box__items_box__item_header__control"><i className="fas edit fa-edit"></i> <i onClick={(event) => props.deleteWlistItem({target: event.target, token: props.token})} data-item-id={item._id} className="wList_main_box__items_box__item_del fas fa-times"></i></span>
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
    wlistGroupOpen: state.wlist.wlistGroupOpen,
    wlists: state.wlist.wlist,
    token: state.user.token
  }
}

function mapDispatchToProps (dispatch) {
  return {
    wlistOpenF: () => dispatch(wlistOpen()),
    wlistCloseF: () => dispatch(wlistClose()),
    wGroupOpenF: () => dispatch(wGroupOpen()),
    wGroupCloseF: () => dispatch(wGroupClose()),
    deleteWlistItem: (item) => dispatch(deleteWlistItem(item))
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
