import React from 'react';
import './styles.css';

const Button = (props) => {
  const {text} = props;
  return(
    <button>{text}</button>
  );
}

export default Button;