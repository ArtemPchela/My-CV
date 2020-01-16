import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
const face = require('./images/me.jpg');

const styles = {
    fontSize: '20px',
    fontFamily: 'Anton'
};

const stylesP = {
    width: '75%',
    margin: 'auto',
    paddingTop: '1em'
};

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={4}>
                        <h2>Artem Pchelenkov</h2>
                        <img
                            src={face}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <p style={stylesP}>
                           I live in Stockholm, Sweden.
                        </p>
                        <p style={stylesP}>
                            I'm open to new offers.
                        </p>
                    </Cell>
                    <Cell col={8}>
                        <h2>Contact Me</h2>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={styles}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                            pchelenkovartem@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={styles}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                            +46 769-61-21-98
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={styles}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href="https://www.linkedin.com/in/artem-pchelenkov/" className='hrefColor'>
                                            /in/artem-pchelenkov/
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={styles}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                            pchelenkovartem
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={styles}>
                                        <i className="fa fa-github" aria-hidden="true"/>
                                        <a href="https://github.com/ArtemPchela" className='hrefColor'>
                                            https://github.com/ArtemPchela
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Contact;
