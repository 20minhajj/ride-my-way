import React, { Component } from "react";
import "../Index-button/button.css";

class ButtonIndex extends Component {
    render() {
        return (
            <div className='user-selector'>
                <div className='btn'>
                    <a href="/" className="btn1"> <input type='button' placeholder='Passenger' value="Passenger"></input> </a>
                    <a href="/" className="btn1"> <input type='button' placeholder='Driver' value="Driver"></input> </a>
                </div>
            </div>
        )
    }
}

export default ButtonIndex;