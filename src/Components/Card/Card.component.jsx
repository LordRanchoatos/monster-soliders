import React from 'react';
import './Card.styles.css';

const Card = (props) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.cop.id}?set=set2&`} alt=''/>
            <h2>{props.cop.name}</h2>
            <p>{props.cop.email}</p>
        </div>
    )
}

export default Card;