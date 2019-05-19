import React, { Components } from 'react';
import '../offer-ride/offer.css';

class Offer extends Components {
    render() {
        return (
            <div className="offer">
                <div className='input'>
                    <input type="text" placeholder='Pickup Location' value='pickup Location' />
                </div>

                <div className='input'>
                    <input type="text" placeholder='Destination' value='Destination' />
                </div>
                
                <div>
                    <input type="text" placeholder="Departure Time" /> 
                </div>

                <div className="submit">
                    <input type='submit' placeholder="Submit" value="submit" />
                </div>
            </div>
        )
    }
}
export default Offer;