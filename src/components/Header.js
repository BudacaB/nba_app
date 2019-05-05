import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div class="ui secondary  menu">
            <a class="item active" href="http://localhost:3000">
                Home
            </a>
            <a class="item">
                Messages
            </a>
            <a class="item">
                Friends
            </a>
            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..."></input>
                        <i class="search link icon"></i>
                    </div>
                </div>
                <a class="ui item">
                <Link to="/login">Login</Link>
                </a>
                <a class="ui item">
                <Link to="/register">Register</Link>
                </a>
            </div>
        </div>
        
    )
}

export default Header;