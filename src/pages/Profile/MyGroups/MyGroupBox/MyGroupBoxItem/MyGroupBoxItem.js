import React from 'react';
import './MyGroupBoxItem.scss';

const MyGroupBoxItem = props => {
  return (
    <div className="myGroupBoxItem">
      <h3 className="myGroupBoxItem__title">{props.title}</h3>
      <div className="myGroupBoxItem__boxGroups">
        {
          props.groups.length > 0 ?
            props.groups.map((item, key) => {
              return (
                <p className="myGroupBoxItem__group" key={key}>{item.title} <i onClick={(event) => props.onDelete({token: props.token, target: event.target})} data-item-id={item._id} className="fas deleteGroup fa-times"></i></p>
              )
            })
          :
            <p>У вас пока что отсутствуют группы.</p>
        }
      </div>
    </div>
  );
}

export default MyGroupBoxItem;
