import React from 'react';
import Cards from './Cards';

const CardsList = (props) => {
        return (
            <div className="ui grid container">
                <div className="four wide column">{props.image}</div>
                <div className="four wide column">Test2</div>
                <div className="four wide column">Test3</div>
                <div className="four wide column">Test4</div>
                <div className="four wide column">Test5</div>
                <div className="four wide column">Test6</div>
                <div className="four wide column">Test7</div>
                <div className="four wide column">Test8</div>
            </div>
        );
}

export default CardsList;