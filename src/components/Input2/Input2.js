import React from 'react';
import './Input2.scss';

const Input2 = props => <input onChange={props.onChange} id={props.inputId} className="Input2" value={props.value} type={props.type} name={props.name} placeholder={props.placeholder} required />

export default Input2;
