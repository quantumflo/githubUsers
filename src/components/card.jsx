import React from 'react';
import './card.css'


const Card =(props) =>{
  return (
    <div className="card">
     <div className="top">

       <img className="img" src={props.img} alt="avatar_img" />
        <h2 className="name">{props.name}</h2>
     </div>

   </div>

  )
}

export default Card;
