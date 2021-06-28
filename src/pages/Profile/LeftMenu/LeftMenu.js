import React from 'react';

import './LeftMenu.scss';

const LeftMenu = (props) => {
  return (
    <div className="PRLeftMenu_box">
      <div className="PRLeftMenu_box__item">
        {
          props.settingsOpen
          ?
          <button onClick={props.openSettingsHandler} className="PRLeftMenu_box__item_btn PRLeftMenu_box__item_btn_active">Настройки</button>
          :
          <button onClick={props.openSettingsHandler} className="PRLeftMenu_box__item_btn">Настройки</button>
        }
        {
          props.myGroupsOpen
          ?
          <button onClick={props.openMyGroupsHandler} className="PRLeftMenu_box__item_btn PRLeftMenu_box__item_btn_active">Группы</button>
          :
          <button onClick={props.openMyGroupsHandler} className="PRLeftMenu_box__item_btn">Группы</button>
        }
      </div>
      {/* <div className="LeftMenu_box__info">
        Ваш баланс
        <br/>
        {props.balance} {props.currancy}
      </div> */}
    </div>
  )
}




export default LeftMenu;
