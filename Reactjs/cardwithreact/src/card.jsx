import React from 'react'
import './index.css';

const Card = ({name,img,role}) => {
  return (
    <div className='card'>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{role}</p>
    </div>
  )
}

export default Card
