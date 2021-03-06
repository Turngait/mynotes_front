import React from 'react';
import { useTranslation } from 'react-i18next';

import GrouptTitle from './MyGroupBoxItemTitle';

import './MyGroupBoxItem.scss';

const MyGroupBoxItem = props => {
  const { t } = useTranslation();

  return (
    <div className="myGroupBoxItem">
      <h3 className="myGroupBoxItem__title">{props.title}</h3>
      <div className="myGroupBoxItem__boxGroups">
        {
          props.groups.length > 0 ?
            props.groups.map((item) => {
              return (
                <p className="myGroupBoxItem__group" key={item._id}>
                  <GrouptTitle type={props.type} title={item.title} id_group={item._id} token={props.token}/>
                  <span className="myGroupBoxItem__group__amount">{item.sum} {props.currancy}</span> 
                  <i 
                    onClick={(event) => props.onDelete(event.target)}
                    data-item-id={item._id} 
                    className="fas deleteGroup fa-times myGroupBoxItem__group__control"
                  ></i>
                </p>
              )
            })
          :
            <p>{t('settings.noGroup')}</p>
        }
      </div>
    </div>
  );
}

export default MyGroupBoxItem;
