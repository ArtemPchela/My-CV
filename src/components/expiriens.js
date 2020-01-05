import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl/lib/Grid";

class Expiriens extends Component {
    render() {
        return(
            <Grid>
                <Cell col={3}>
                    {this.props.startYearSecond} / {this.props.finishYearSecond}
                </Cell>
                <Cell col={9}>
                    <h3 style={{marginBottom: "0px"}}>Junior Front-end Developer</h3>
                        <h5 style={{marginTop: "2px"}}>IT Academy Step - Minsk, Belarus</h5>
                    <p>
                        I’m passionate about developing high quality and maintainable software,
                        exploring modern technologies and using best practices (writing simple and clean code using OOP design patterns).
                        I successfully completed the JavaScript Fundamentals course at the IT Step Academy in 2019.
                    </p>
                        <p>During the training, the following skills were obtained:</p>
                        <p className={"skills-list"}>- Ability to use HTML and CSS (preprocessor CSS: Less, Sass).</p>
                        <p className={"skills-list"}>- Understanding the fundamentals of JavaScript.</p>
                        <p className={"skills-list"}>- Knowledge and use of frameworks and libraries (React.js, Bootstrap).</p>
                        <p className={"skills-list"}>- Knowledge and use of the Git Version Control System.</p>
                        <p className={"skills-list"}>- Ability to customise the npm Package Manager.</p>
                </Cell>
                <Cell col={3}>
                    {this.props.startYearFirst} / {this.props.finishYearFirst}
                </Cell>
                <Cell col={9}>
                    <h3 style={{marginBottom: "0px"}}>Shift Supervisor</h3>
                    <h5 style={{marginTop: "2px"}}>Royal Canin - Minsk, Belarus</h5>
                    <p className={"skills-list"}>- In charge of shift changes.</p>
                    <p className={"skills-list"}>- Managing a team of 12.</p>
                    <p className={"skills-list"}>- Drawing up the annual Personal Development Plan, to plan and encourage the development of employees.</p>
                    <p className={"skills-list"}>- Implementation of quality and food safety standards, such as HACCP, DQM, and Workflow.</p>
                    <p className={"skills-list"}>- Leading projects to expand and improve the efficiency of the warehouse.</p>
                    <p className={"skills-list"}>- Preparation and writing of instructions and procedures, keeping records.</p>
                    <p className={"skills-list"}>- Working with accounting software such as Navision and WMS Solvo.</p>
                    <p className={"skills-list"}>- Acceptance and dispatch of goods.</p>
                </Cell>
            </Grid>
        )
    }
}

export default Expiriens;
