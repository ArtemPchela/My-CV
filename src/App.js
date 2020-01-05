import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import './App.css';
import Main from "./components/main"
import { Link } from "react-router-dom";


class App extends Component {
    render() {
        return(
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Artem Pchelenkov" scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                        <Drawer title="Menu" style={{background: 'fff', color: 'black', fontSize: 'bold'}}>
                        <Navigation className="left-title" style={{color: 'black'}}>
                            <Link to="/" style={{color: 'black', fontSize: 'bold'}}>Home</Link>
                            <Link to="/resume" style={{color: 'black', fontSize: 'bold'}}>Resume</Link>
                            <Link to="/aboutme" style={{color: 'black', fontSize: 'bold'}}>About Me</Link>
                            <Link to="/projects" style={{color: 'black', fontSize: 'bold'}}>Projects</Link>
                            <Link to="/contact" style={{color: 'black', fontSize: 'bold'}}>Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
            );
        }
    }


export default App;
