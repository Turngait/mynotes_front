import React from 'react';
import './ButtonPopUp.scss';

const ButtonPopUp = props => <button onClick={props.onClick} type="button" className="ButtonPopUp">{props.title}</button>

export default ButtonPopUp;
