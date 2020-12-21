import React from 'react';

import './LeftMenu.scss';

const LeftMenu = (props) => {
  return (
    <ul className="PRLeftMenu_box">
      <li className="PRLeftMenu_box__item">
        {
          props.myDataOpen ? 
          <button onClick={props.openMyDataHandler} className="PRLeftMenu_box__item_btn PRLeftMenu_box__item_btn_active">MyData</button>
          :
          <button onClick={props.openMyDataHandler} className="PRLeftMenu_box__item_btn">MyData</button>
        }
        
      </li>
      <li className="PRLeftMenu_box__item">
        {
          props.myGroupsOpen
          ?
          <button onClick={props.openMyGroupsHandler} className="PRLeftMenu_box__item_btn PRLeftMenu_box__item_btn_active">MyGroups</button>
          :
          <button onClick={props.openMyGroupsHandler} className="PRLeftMenu_box__item_btn">MyGroups</button>
        }
      </li>
    </ul>
  )
}




export default LeftMenu;
