import React, { Component } from "react";
import '../toogle/toggle.css';

class ToggleButton extends Component {
    render() {
        return (
            <div id="sidebar">
                <div className="toggle-button" onclick="toggleSidebar()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li><a href="rides-respond-user.html">Notifications</a></li>
                    <li><a href="offers_user.html">Availiable Rides</a></li>
                    <li><a href="rides_taken_user.html">Rides taken</a></li>
                    <li><a href="index.html">Become Driver</a></li>
                    <li><a href="index.html">Logout</a></li>

                </ul>
            </div>
        )
    }
}

export default ToggleButton;