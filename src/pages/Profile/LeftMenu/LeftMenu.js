import React from 'react';
import { useTranslation } from 'react-i18next';

import './LeftMenu.scss';

const LeftMenu = (props) => {
  const { t } = useTranslation();

  return (
    <div className="PRLeftMenu_box">
      <div className="PRLeftMenu_box__item">
        {
          props.settingsOpen
          ?
          <button onClick={props.openSettingsHandler} className="PRLeftMenu_box__item_btn PRLeftMenu_box__item_btn_active">{t('menu.settings')}</button>
          :
          <button onClick={props.openSettingsHandler} className="PRLeftMenu_box__item_btn">{t('menu.settings')}</button>
        }
        {
          props.myGroupsOpen
          ?
          <button onClick={props.openMyGroupsHandler} className="PRLeftMenu_box__item_btn PRLeftMenu_box__item_btn_active">{t('menu.groups')}</button>
          :
          <button onClick={props.openMyGroupsHandler} className="PRLeftMenu_box__item_btn">{t('menu.groups')}</button>
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
