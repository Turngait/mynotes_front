import React from 'react';

import './index.scss';

const GroupTitle = ({title}) => {
  const [isEditable, setIsEditable] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(title);
  return (
    <>
      {
        isEditable ? 
        (
          <>
            <input 
              onBlur={() => setIsEditable(false)} 
              className="myGroupBoxItem__group__title__edit" 
              onChange={(event) => setNewTitle(event.target.value)} 
              value={newTitle} 
              placeholder="Название группы..."
            />
            <i className="fas fa-check myGroupBoxItem__group__title__edit__saveBtn"></i>
          </>
        )
          : <span onClick={() => setIsEditable(true)} className="myGroupBoxItem__group__title">{title}</span>
      }
    </>
  )
}

export default GroupTitle;
