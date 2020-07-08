import React from 'react';
import './Select1.scss';

const Select1 = props => {
  return (
    <select onChange={props.onChange} className="select1">
      {props.children}
    </select>
  );
}

export default Select1;
