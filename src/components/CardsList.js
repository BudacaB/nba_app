import React from 'react';
import AppCard from './Card';

class CardsList extends React.Component {
    
    renderCardsList() {
        return (
                this.props.cards.map((currentCard) => {
                        return <AppCard card={currentCard} key={currentCard.title}/>
                })
        );
    }

    render() {
        return this.renderCardsList();
    }
} 

export default CardsList;