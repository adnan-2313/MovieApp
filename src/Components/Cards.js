import React from 'react';
// import "./index.css";

function Cards(props) {
  return (
    <>
<div className = "cards">
    <div className = "card_img"> <img src={props.src} alt="CardImage"  /></div>
        <div className="card_category">
            <span >{props.title}</span>
            </div>
                <h3 className="card_title">{props.sname}</h3>
                <div className = "btn">
                    <a  href={props.href} target="_blank" rel="noopener noreferrer">
                        <button>Watch Now</button></a>    
                        </div>
    </div>

</>
  )
}

export default Cards;
