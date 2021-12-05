import React from 'react';
import './styles.css'

const Card = (props) => {
  const {title, imgSrc} = props;
  return(
    <div className="card">
      <img src={imgSrc} alt={title}/>
      <p>{title}</p>
    </div>
  );
}

export default Card;