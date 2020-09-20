import React from 'react';
import { Link } from 'react-scroll';

export const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                
                <div className="container__content">
                    <div className="banner__content">
                        <h2 className="banner__content-title">
                            Test assignment for Frontend Developer position
                        </h2>
                        <h5 className="banner__content-subtitle">
                            <span>
                                We kindly remind you that your test assignment 
                                should be submitted as a link to github/bitbucket 
                                repository. 
                            </span>
                            <span className="show__desc">
                                Please be patient, we consider and respond to every 
                                application that meets minimum requirements. We look 
                                forward to your submission. Good luck! The photo has 
                                to scale in the banner area on the different screens
                            </span>
                        </h5>

                        <Link 
                            to="form" 
                            smooth={true} 
                            duration={1000}
                            className="button-page"
                        >
                            <button>Sing up now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}