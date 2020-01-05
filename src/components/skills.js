import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={6}>
                    <div>
                        <h5>LENGUAGES</h5>
                        <p>JavaScript, HTML/CSS</p>
                        <h5>PREPROCESSORS</h5>
                        <p>Less, Sass</p>
                     </div>
                </Cell>
                <Cell col={6}>
                    <div>
                        <h5>FRAMEWORKS / LIBRARIES</h5>
                        <p>Bootstrap, React, JSON, Node.js, npm</p>
                        <h5>PRODUCTS / METHODOLOGIES</h5>
                        <p>Git </p>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills
