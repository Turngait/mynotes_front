import React from 'react';
import './Input1.scss';

const Input1 = props => <input onChange={props.onChange} id={props.inputId} className="Input1" value={props.value} type={props.type} name={props.name} placeholder={props.placeholder} required />

export default Input1;
