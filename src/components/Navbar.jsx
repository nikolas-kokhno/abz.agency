import React from 'react';
import Logo from '../assets/img/logo.svg';
import Menu from '../assets/img/menu icon.svg';

export const Navbar = () => {

    return (
        <div className="navigation">
            <div className="container">
                <div className="navigation__content">

                    <div className="navigation__content-logo">
                        <img src={Logo} alt="logo"/>
                    </div>

                    <ul className="navigation__content-items">
                        <li>About me</li>
                        <li>Relationships</li>
                        <li>Requirements</li>
                        <li>Users</li>
                        <li>Sign Up</li>
                    </ul>
                    
                    <input 
                        type="checkbox" 
                        id="navigation__check" 
                        className="navigation__check"
                    />
                    <label htmlFor="check" className="navigation__check-btn">
                        <img src={Menu} alt="menu"/>
                    </label>
                </div>
            </div>
        </div>
    )
}