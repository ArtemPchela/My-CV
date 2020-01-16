import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl/lib/Grid";

class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    {this.props.startYear1} / {this.props.endYear1}
                </Cell>
                <Cell col={8}>
                    <h3 style={{marginBottom: "0px"}}>Computer Academy STEP</h3>
                    <p className={"skills-list"}>Minsk, Belarus</p>
                    <h5 style={{marginTop: "2px"}}>Front-end developer</h5>
                </Cell>
                <Cell col={4}>
                    {this.props.startYear3} / {this.props.endYear3}
                </Cell>
                <Cell col={8}>
                    <h3 style={{marginBottom: "0px"}}>Learning Technology Center</h3>
                    <p className={"skills-list"}>Minsk, Belarus</p>
                    <h5 style={{marginTop: "2px"}}>Testing Web-oriented applications. QC engineer</h5>
                </Cell>
                <Cell col={4}>
                    {this.props.startYear2} / {this.props.endYear2}
                </Cell>
                <Cell col={8}>
                    <h3 style={{marginBottom: "0px"}}>Minsk State College of Food Industry</h3>
                    <p className={"skills-list"}>Minsk, Belarus</p>
                    <h5 style={{marginTop: "2px"}}>Technician-technologist</h5>
                </Cell>
            </Grid>
        )
    }
}

export default Education;
