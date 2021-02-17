import React from 'react';

import {changeGroupName} from '../../../../services';

import './index.scss';

const GroupTitle = ({title, id_group, type, token}) => {
  const [isEditable, setIsEditable] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(title);
  const [msg, setMsg] = React.useState('');
  return (
    <>
      {
        isEditable ? 
        (
          <>
            <input
              className="myGroupBoxItem__group__title__edit" 
              onChange={(event) => setNewTitle(event.target.value)} 
              value={newTitle} 
              placeholder="Название группы..."
            />
            <i 
              onClick={() => changeGroupName(newTitle, id_group, type, token, setMsg, setIsEditable)} 
              className="fas fa-check myGroupBoxItem__group__title__edit__saveBtn"
            ></i>
            <i 
              onClick={() => setIsEditable(false)}
              className="fas deleteGroup fa-times myGroupBoxItem__group__title__edit__saveBtn"
            ></i>
          </>
        )
          : 
          <>
            <span onClick={() => setIsEditable(true)} className="myGroupBoxItem__group__title">{newTitle}</span>
            <span className="myGroupBoxItem__group__msg">{msg}</span>
          </>
      }
    </>
  )
}

export default GroupTitle;
