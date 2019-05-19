import React, { Component } from 'react';
import '../driver-form/d-form.css';

class RiderLogin extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Full name" />
                </div>
                
                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>

                <input type="submit" className="btn" value="Sig up" />
                <div>
                    <p>Have an account? <a href="rider-login.html">Log In</a></p>
                </div>
            </div>
        )
    }
} 

export default RiderLogin;