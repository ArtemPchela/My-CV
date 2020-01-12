import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button } from 'react-mdl';
/*imports Images*/
import JS1 from './images/jsProjects/js1.jpg';
import JS2 from './images/jsProjects/js2.jpg';
import React1 from './images/ReactProjects/react1.png';
import JQ1 from './images/jQueryProjects/jQ1.png';

class Projects extends Component {
      constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                    {/*<Tab>jQuery</Tab>*/}
                    <Tab>HTML/CSS</Tab>
                </Tabs>
                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                         </Cell>
                    </Grid>
                </section>
            </div>
        )
    }


   /*JavaScript*/
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            backgroundImage: `url(${JS1})`
                        }}>
                        </CardTitle>
                        <CardText>
                            Button for toggle random colors with used JS function, style CSS and HTML
                        </CardText>
                        <CardActions border>
                            <Button colored><a href={"https://github.com/ArtemPchela/Button-change-color/blob/master/index.html"} target={"_blank"}>GitHub</a></Button>
                            <Button colored><a href={"https://codepen.io/Pchela/pen/NWPMmjr"} target={"_blank"}>CodePen</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            backgroundImage: `url(${JS2})`
                        }}>
                        </CardTitle>
                        <CardText>
                            It's a simple generator random HEX colors with HTML/CSS and JS
                        </CardText>
                        <CardActions border>
                            <Button colored><a href={"https://github.com/ArtemPchela/Generator-HEX-colors"} target={"_blank"}>GitHub</a></Button>
                            <Button colored><a href={"https://codepen.io/Pchela/pen/xxbjeMM"} target={"_blank"}>CodePen</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                </div>
            )
            /*React*/
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            backgroundImage: `url(${React1})`
                        }}>
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored><a href={"https://github.com/ArtemPchela/React_ToDo"} target={"_blank"}>GitHub</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                </div>
            )

            /*jQuery*/
        // } else if (this.state.activeTab === 2) {
        //     return (
        //         <div className="projects-grid">
        //             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //                 <CardTitle style={{
        //                     color: 'black',
        //                     height: '176px',
        //                     backgroundImage: `url(${JQ1})`
        //                 }}>
        //                 </CardTitle>
        //                 <CardText>
        //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                     Mauris sagittis pellentesque lacus eleifend lacinia...
        //                 </CardText>
        //                 <CardActions border>
        //                     <Button colored><a href={"https://github.com"} target={"_blank"}>GitHub</a></Button>
        //                     <Button colored><a href={"https://codepen.io/"}>CodePen</a></Button>
        //                 </CardActions>
        //                 <CardMenu style={{color: '#fff'}}>
        //                 </CardMenu>
        //             </Card>
        //         </div>
        //     )
            /*HTML and CSS*/
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            background: 'url(https://i.udemycdn.com/course/750x422/792484_cc98_3.jpg) center / cover'
                        }}>
                        </CardTitle>
                        <CardText>
                            Simple example site layout HTML/CSS.
                            Step by step
                        </CardText>
                        <CardActions border>
                            <Button colored><a href={"https://github.com/ArtemPchela/HTML-CSS1"} target={"_blank"}>GitHub</a></Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYx2lNzxdLCd3Vad-MvsXMifErbBodHOOiJHuw0ckKTzJr9itB) center / cover'
                        }}>
                        </CardTitle>
                        <CardText>
                            Simple example site layout HTML/CSS with preprocessor Less.
                            Use @media.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href={"https://github.com/ArtemPchela/HTML-CSS2"} target={"_blank"}>GitHub</a></Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzzd3D_A_TQv0HgpLDM-ZKKW73qNaIz4h4AEyypT3Yvg9a8hft) center / cover'
                        }}>
                        </CardTitle>
                        <CardText>
                            Simple example site layout HTML/CSS with preprocessor Less.
                            First step
                        </CardText>
                        <CardActions border>
                            <Button colored><a href={"https://github.com/ArtemPchela/HTML-CSS3"} target={"_blank"}>GitHub</a></Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSz8p_uLps0_HteF2HeJO6yAqgLFsYOCp-UegE24xMwG-h4LTB) center / cover'
                        }}>
                        </CardTitle>
                        <CardText>
                            Simple example site layout HTML/CSS.

                        </CardText>
                        <CardActions border>
                            <Button colored><a href={"https://github.com/ArtemPchela/HTML-CSS4"} target={"_blank"}>GitHub</a></Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }
}


export default Projects;



