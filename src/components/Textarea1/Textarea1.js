import React from 'react';
import './Textarea1.scss';

const Textarea1 = props => {
  return (
    <textarea onChange={props.onChange} className="txtarea1" name={props.name} placeholder={props.placeholder}></textarea>
  );
}

export default Textarea1;
