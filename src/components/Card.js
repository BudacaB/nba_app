import './Card.css';
import React from 'react';

const Card = (props) => {
    return (
        <div className="ui card">
            <div className="image">
                <img src={props.card.link}></img>
            </div>
        </div>
    );
}

export default Card;