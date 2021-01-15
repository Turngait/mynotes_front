import React from 'react';

import './LeftMenu.scss';

const LeftMenu = (props) => {
  return (
    <div className="PRLeftMenu_box">
      <div className="PRLeftMenu_box__item">
        {
          props.myDataOpen ? 
          <button onClick={props.openMyDataHandler} className="PRLeftMenu_box__item_btn PRLeftMenu_box__item_btn_active">Статистика</button>
          :
          <button onClick={props.openMyDataHandler} className="PRLeftMenu_box__item_btn">Статистика</button>
        }
        {
          props.myGroupsOpen
          ?
          <button onClick={props.openMyGroupsHandler} className="PRLeftMenu_box__item_btn PRLeftMenu_box__item_btn_active">Группы</button>
          :
          <button onClick={props.openMyGroupsHandler} className="PRLeftMenu_box__item_btn">Группы</button>
        }
        {
          props.settingsOpen
          ?
          <button onClick={props.openSettingsHandler} className="PRLeftMenu_box__item_btn PRLeftMenu_box__item_btn_active">Настройки</button>
          :
          <button onClick={props.openSettingsHandler} className="PRLeftMenu_box__item_btn">Настройки</button>
        }
      </div>
      <div className="LeftMenu_box__info">
        Ваш баланс
        <br/>
        {props.currancy} {props.balance}
      </div>
    </div>
  )
}




export default LeftMenu;
