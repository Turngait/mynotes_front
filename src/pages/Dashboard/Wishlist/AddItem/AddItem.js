import React from 'react'
import './AddItem.scss'
import PopUp from '../../../../components/PopUp/PopUp'

const AddItem = props => {
  return (
    <PopUp>
      <i onClick={props.onClose} className="fas fa-times close"></i>
      <h3>Add Wishlist Item</h3>
      <form className="add_wlist_item_box">
        <input className="add_wlist_item_box__input" type="text" name="name" placeholder="Item name..."/>
        <textarea className="add_wlist_item_box__txtarea" name="text" placeholder="Description...">
        </textarea>

        <div className="add_wlist_item_box__opt">
          
          <select className="add_wlist_item_box__opt_sel">
            <option>Group1</option>
          </select>

          <select className="add_wlist_item_box__opt_sel">
            <option>Priority 1</option>
            <option>Priority 2</option>
            <option>Priority 3</option>
            <option>Priority 4</option>
          </select>
        </div>

        <button className="add_wlist_item_box__send" type="button">Send</button>
      </form>
    </PopUp>
  )
}

export default AddItem