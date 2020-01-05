import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import { Pic } from "pic";
//import img from './me.jpg';
//const face = require('./images/me.jpg');
import PDF from "../CV/CV.pdf";



class Landingpage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h2>{"Junior Front - end Developer"}</h2>
                            <p>{"HTML | CSS | JavaScript | React | Bootstrap | jQuery | npm | Git | GitHub"}</p>
                            {<div className="social-links">

                                {/*Linkedin*/}
                                <a href="https://www.linkedin.com/in/artem-pchelenkov/"  rel="noopener noreferrer" target="_blank"  >
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/*Github*/}
                                <a href="https://github.com/ArtemPchela"  rel="noopener noreferrer" target="_blank"  >
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/*Freecodecamp*/}
                                <a href="#top"  rel="noopener noreferrer" target="_blank"  >
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                {/*/!*Sololearn*!/*/}
                                {/*<a href=""  rel="noopener noreferrer" target="_blank"  >*/}
                                {/*    <i className="fa fa-solo-learn" aria-hidden="true" />*/}
                                {/*</a>*/}
                            </div>}
                            <div className='downloadCV'>
                                <a href={PDF} download>
                                    <button type='button' className='button'>
                                        <i className="fa fa-download" />
                                        Download CV
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Landingpage;
