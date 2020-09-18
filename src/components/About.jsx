import React from 'react';
import Grid from '@material-ui/core/Grid';
import Man from '../assets/img/man-laptop-v1.svg';

export const About = () => {
    return (
        <section className="about">
            <div className="container">
                <Grid container spacing={3} className="section">
                    <Grid item xs={12} sm={12}>
                        <div className="section__header about__header">
                            Let's get acquainted
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={5} className="about__content-img">
                        <img src={Man} alt="man" />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <div className="about__content-text">
                            <h4>I am cool frontend developer</h4>
                            <p>
                                We will evaluate how clean your approach to writing 
                                CSS and Javascript code is. You can use any CSS and 
                                Javascript 3rd party libraries without any 
                                restriction.
                            </p>
                            <p className="about__content-text-2">
                                If 3rd party css/javascript libraries are added to 
                                the project via bower/npm/yarn you will get bonus 
                                points. If you use any task runner (gulp/webpack) you 
                                will get bonus points as well. Slice service directory 
                                age P​SD mockup​ into HTML5/CSS3. 
                            </p>
                            <span>Sing up now</span>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}