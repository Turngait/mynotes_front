import React from 'react';
import './Button1.scss';

const Button1 = props => <button onClick={props.onClick} type="button" className="Button1">{props.title}</button>

export default Button1;
