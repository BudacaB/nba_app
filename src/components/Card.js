import './Card.css';
import React from 'react';


const AppCard = (props) => {
    return (
        
            <div class="ui cards">
                <div class="ui centered card">
                    <div class="content">
                        <img class="right floated mini ui image" src={props.card.link}></img>
                    <div class="header">
                        A person
                    </div>
                    <div class="meta">
                        Number of posts
                    </div>
                    <div class="description">
                        Quote goes here
                    </div>
                    </div>
                    <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic green button">Approve</div>
                        <div class="ui basic red button">Decline</div>
                    </div>
                    <div class="extra">
                        Likes:
                    </div>
                    <div class="extra">
                        Dislikes:
                    </div>
                    </div>
                </div>
            </div>
        
    );
}

export default AppCard;