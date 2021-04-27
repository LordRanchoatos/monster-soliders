import React from 'react';
import './CardList.styles.css';
import Card from '../Card/Card.component'

const CardList = (props) =>{
    return(
        <div className='card-list'>
            {props.cops.map((cop) => 
                <Card key={cop.id} cop={cop}/>
            )}
        </div>
    )
};

export default CardList