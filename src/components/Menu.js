import React from 'react';

const AppMenu = () => {
    return (
        <div class="ui vertical menu">
            <a class="active teal item">
                New
                <div class="ui teal left pointing label">3</div>
            </a>
            <a class="item">
                Pending
                <div class="ui label">1</div>
            </a>
            <a class="item">
                Drafts
                <div class="ui label">2</div>
            </a>
        </div>
    );
}

export default AppMenu;