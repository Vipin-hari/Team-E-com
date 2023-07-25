import React from 'react';
import "./topper.css";

const Topper = () => {
    return (
        <div className="navbarr">
            <div className="icon">
                <img className='app-logo' src='Zordlogo2.png' alt='' />
            </div>
            <div className="menu">
                <ul>
                    <li> <a className='menu-content' href="#sellonline">Sell Online</a></li>
                    <li> <a className='menu-content' href="#howitworks">How It Works</a></li>
                    <li> <a className='menu-content' href="#rating">Rating</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Topper;
