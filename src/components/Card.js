import './Card.css';
import React from 'react';


const AppCard = (props) => {
    return (
        // <div className="ui card">
        //     <div className="image">
        //         <img src={props.card.link}></img>
        //     </div>
        // </div>   

        <div class="ui grid">
            <div class="two wide column"></div>
                <div class="eight wide column">
                    <div class="ui four cards">
                        <div class="card">
                        <div class="image">
                            <img src={props.card.link}></img>
                        </div>
                        <p>Quote goes here</p>
                        <div class="extra">
                            Rating:
                            <div class="ui star rating" data-rating="4"></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="four wide column">
                    <div class="ui cards">
                        <div class="card">
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
                            </div>
                        </div>
                    </div>
                </div>
        </div>


  

        
    );
}

export default AppCard;