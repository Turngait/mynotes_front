import React from 'react';
import './LeftMenu.scss';
import { connect } from 'react-redux';
import { openMyData, openMyGroups } from '../../../store/Profile/profile.action';

const LeftMenu = (props) => {
  return (
    <ul className="LeftMenu_box">
      <li className="LeftMenu_box__item">
        {
          props.isMyDataOpen ? 
          <button onClick={props.openMyData} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">MyData</button>
          :
          <button onClick={props.openMyData} className="LeftMenu_box__item_btn">MyData</button>
        }
        
      </li>
      <li className="LeftMenu_box__item">
        {
          props.isMyGroupsOpen
          ?
          <button onClick={props.openMyGroups} className="LeftMenu_box__item_btn LeftMenu_box__item_btn_active">MyGroups</button>
          :
          <button onClick={props.openMyGroups} className="LeftMenu_box__item_btn">MyGroups</button>
        }
      </li>
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    isMyDataOpen: state.profile.isMyDataOpen,
    isMyGroupsOpen: state.profile.isMyGroupsOpen
  }
}

function mapDispatchToPRops(dispatch) {
  return {
    openMyData: () => dispatch(openMyData()),
    openMyGroups: () => dispatch(openMyGroups())
  }
}

export default connect(mapStateToProps, mapDispatchToPRops)(LeftMenu)
