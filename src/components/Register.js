import React from 'react';

const Register = () => {
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
                    <div class="field">
                        <div class="ui checkbox">
                        <input type="checkbox" tabindex="0"></input>
                        <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
            <div class="four wide column"></div>
        </div> 


        
    )
}

export default Register;