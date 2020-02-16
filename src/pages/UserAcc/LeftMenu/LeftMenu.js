import React from 'react';
import './LeftMenu.scss';

const LeftMenu = () => {
  return (
    <ul className="LeftMenu_box">
      <li className="LeftMenu_box__item">WishList</li>
      <li className="LeftMenu_box__item">ToDoList</li>
      <li className="LeftMenu_box__item">Notes</li>
      <li className="LeftMenu_box__item">MyFinances</li>
    </ul>
  )
}

export default LeftMenu;