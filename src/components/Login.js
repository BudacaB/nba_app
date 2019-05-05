import React from 'react';

const Login = () => {
    return (
        <div class="ui grid">
            <div class="four wide column"></div>
            <div class="eight wide column">
                <form class="ui form">
                    <div class="field">
                        <label>Username</label>
                        <input type="text" placeholder="Username"></input>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input type="password"></input>
                    </div>
                    <button class="ui button" type="submit">Login</button>
                </form>
            </div>
            <div class="four wide column"></div>
        </div> 


        
    )
}

export default Login;