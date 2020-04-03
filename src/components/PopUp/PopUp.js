import React from 'react'
import './PopUp.scss'

const PopUp = props => {
  return (
    <div className="overlay">
      <div className="popup_box">
        {props.children}
      </div>
    </div>
  )
}

export default PopUp
