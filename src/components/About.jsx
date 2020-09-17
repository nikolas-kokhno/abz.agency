import React from 'react';
import Man from '../assets/img/man-laptop-v1.svg';

export const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="container__content">

                    <div className="section">
                        <h2 className="section__header">
                            Let's get acquainted
                        </h2>

                        <div className="about__content">
                            <div className="about__content-img">
                                <img src={Man} alt="Man"/>
                            </div>

                            <div className="about__content-text">
                                <h4>I am cool frontend developer</h4>
                                <p>
                                    We will evaluate how clean your approach to 
                                    writing CSS and Javascript code is. You can use 
                                    any CSS and Javascript 3rd party libraries 
                                    without any restriction.
                                </p>
                                <p>
                                    If 3rd party css/javascript libraries are added to 
                                    the project via bower/npm/yarn you will get bonus 
                                    points. If you use any task runner (gulp/webpack) 
                                    you will get bonus points as well. Slice service 
                                    directory page P​SD mockup​ into HTML5/CSS3. 
                                </p>

                                <span>Sing up now</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}