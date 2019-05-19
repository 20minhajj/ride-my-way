import React, { Component } from "react";
import "../index-page/index-page.css";

class IndexPage extends Component {
    render() {
        return (
            <div>
                <div id="landing-page">
                    <section className="index-banner" >
                        <p>Welcome to Ride-My-Way! A carpooling app <br />that provides drivers 
                            with the ability to create ride offers and passengers to join in.
                        </p>
                        <p><b>Register</b> to proceed<b /> 
                        </p>
                    </section>
                </div>
            </div>
        )
    }
}

export default IndexPage;