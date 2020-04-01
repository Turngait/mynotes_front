import React from 'react'
import './PopUp.scss'

const PopUp = props => {
  return (
    <div className="popup_box">
      {props.children}
    </div>
  )
}

export default PopUp
