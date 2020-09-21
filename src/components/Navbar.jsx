import React from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import Logo from '../assets/img/logo.svg';
import Menu from '../assets/img/menu icon.svg';

export const Navbar = () => {

    return (
        <div className="navigation">
            <div className="container">
                <div className="navigation__content">

                    <div 
                        className="navigation__content-logo" 
                        onClick={() => scroll.scrollToTop()}
                    >
                        <img src={Logo} alt="logo"/>
                    </div>

                    <input 
                        type="checkbox" 
                        id="navigation__check" 
                        className="navigation__check"
                    />
                    <label htmlFor="check" className="navigation__check-btn">
                        <img src={Menu} alt="menu"/>
                    </label>

                    <ul className="navigation__content-items">
                        <li>
                            <Link
                                to="about" 
                                smooth={true} 
                                duration={1000}
                                className="button-page"
                            >
                                About me
                            </Link>
                        </li>
                        <li>Relationships</li>
                        <li>Requirements</li>
                        <li>
                            <Link
                                to="users" 
                                smooth={true} 
                                duration={1000}
                                className="button-page"
                            >
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link
                               to="form" 
                               smooth={true} 
                               duration={1000}
                               className="button-page" 
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}