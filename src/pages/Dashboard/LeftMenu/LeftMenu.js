import React from 'react';
import './LeftMenu.scss';

const LeftMenu = () => {
  return (
    <ul className="LeftMenu_box">
      <li className="LeftMenu_box__item"><a href="/finance" className="LeftMenu_box__item_link">MyFinances</a></li>
      <li className="LeftMenu_box__item"><a href="/wishlist" className="LeftMenu_box__item_link">WishList</a></li>
      <li className="LeftMenu_box__item"><a href="/todolist" className="LeftMenu_box__item_link">ToDoList</a></li>
      <li className="LeftMenu_box__item"><a href="/notes" className="LeftMenu_box__item_link">Notes</a></li>
    </ul>
  )
}

export default LeftMenu;