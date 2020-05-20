import React from 'react';
import './Heading1.scss';

const Heading1 = props => {
  return (
    <h3 className="heading">{props.title}</h3>
  );
}

export default Heading1;
