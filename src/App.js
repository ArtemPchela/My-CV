import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import './App.css';
import Main from "./components/main"
import { Link } from "react-router-dom";

const stylesLinkLeft = {
    position: 'relative',
    fontSize: '0.93rem',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    fontWeight: '700',
    textDecoration: 'none',
    color: 'black',
    boxSizing: 'border-box',
};

// const styleMenu = {
//     fontWeight: '700',
//     width: "150px",
//     height: "70%",
//     borderRight: "none",
// };

const headerStyle = {
    position: 'relative',
    color: 'white',
    letterSpacing: '0.02em',
    textDecoration: 'none',
};

class App extends Component {
    render() {
        return(
            <div className="demo-big-content">
                <Layout>
                    <Header style={headerStyle} title="Artem Pchelenkov" scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                        <Drawer title="Menu"  className="leftMenuStyle">
                        <Navigation className="left-title" style={{color: 'fff'}}>
                            <Link to="/" style={stylesLinkLeft}>Home</Link>
                            <Link to="/resume" style={stylesLinkLeft}>Resume</Link>
                            <Link to="/aboutme" style={stylesLinkLeft}>About Me</Link>
                            <Link to="/projects" style={stylesLinkLeft}>Projects</Link>
                            <Link to="/contact" style={stylesLinkLeft}>Contact</Link>
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
