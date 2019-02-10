import React from 'react';
import Card from './Card';

class CardsList extends React.Component {
    
    renderCardsList() {
        return (
                this.props.cards.map((currentCard) => {
                        return <Card card={currentCard} key={currentCard.title}/>
                })
        );
    }

    render() {
        return this.renderCardsList();
    }
} 

export default CardsList;