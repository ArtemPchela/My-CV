import React, { Component } from 'react';
import { Grid, Cell} from "react-mdl";
import Expiriens from "./expiriens";
import Skills from "./skills";
import Education from "./education";
import PDF from "../CV/CV_Artem Pchelenkov.pdf";
const junior2 = require('./images/junior2.jpg');

class Resume extends Component {
    render() {
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                       <div style={{textAlign: "center", marginTop: "2em"}}>
                           <img
                               src={junior2}
                               alt="avatar"
                               style={{height: "200px"}}
                           />
                       </div>
                       <div className="header-text">
                           <h2 style={{paddingTop: '1em',
                               fontSize: '25px',
                               textAlign: 'center',
                           }}><b>Junior Front-end Developer</b></h2>
                           <hr style={{borderTop: "3px solid #833fb2", width: '100%'}}/>
                       </div>
                       <div className='downloadCV'>
                           <a href={PDF} download>
                               <button type='button' className='button'>
                                   <i className="fa fa-download" />
                                   Download resume
                               </button>
                           </a>
                       </div>
                   </Cell>
                   <Cell col={8} className="resume-right-col">
                       <h2>Skills</h2>
                       <Skills
                       />

                       <hr style={{borderTop: '3px solid #e22947'}} />

                       <h2>Expiriense</h2>
                       <Expiriens
                           startYearSecond={"2018"}
                           finishYearSecond={"2019"}

                           startYearFirst={"2013"}
                           finishYearFirst={"2019"}
                       />

                       <hr style={{borderTop: '3px solid #e22947'}} />

                       <h2>Education</h2>
                       <Education
                           startYear1={"2018"}
                           endYear1={"2019"}

                           startYear3={"2017"}
                           endYear3={"2018"}

                           startYear2={"2009"}
                           endYear2={"2014"}
                       />
                   </Cell>
               </Grid>
            </div>
        )
    }
}


export default Resume;
