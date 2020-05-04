import React from 'react';
import { connect } from 'react-redux';
import AddItem from './AddItem/AddItem';
import AddGroup from './AddGroup/AddGroup';
import Button from '../../../components/Button1/Button1';
import WlistItem from './WlistItem/WlistItem';
import './Wishlist.scss';
import {wlistOpen, wlistClose, wGroupOpen, wGroupClose} from '../../../store/Wlist/wlist.actions';

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
          <Button onClick={props.wlistOpenF} title='Add Item' />
          <Button onClick={props.wGroupOpenF} title='Add Group' />
        </div>
      </div>

      <div className="wList_main_box">
        <div className="wList_main_box__items_box">
          {
            props.wlists ?
            props.wlists.map((item, key) => {
              return (
                <WlistItem item={item} key={key} />
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
    wGroupCloseF: () => dispatch(wGroupClose())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
