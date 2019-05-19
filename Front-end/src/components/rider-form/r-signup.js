import React, { Component } from 'react';
import '../rider-form/form.css';

class RiderSignup extends Component {
    render() {
        return (
            // <h1>Rider Sign Up<h1/>
            <div>
                <div>
                    <input type="text" placeholder="Full name" />
                </div>
                <div className="input">
                    <input type="email" placeholder="Email address" />
                </div>

                <div className="input">

                    <input type="number" placeholder="Phone number" />
                </div>

                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>

                <div className="input">
                    <input type="password" placeholder="confirm password" />
                </div>


                <input type="submit" className="btn" value="Sig up" />
                <div>
                    <p>Have an account? <a href="rider-login.html">Log In</a></p>
                </div>
            </div>
        )
    }
}
export default RiderSignup;