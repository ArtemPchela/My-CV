import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
const bike = require('./images/activities/bike.png');
const gym1 = require('./images/activities/gym1.png');
const pingpong = require('./images/activities/pingpong.png');
const run = require('./images/activities/run.jpg');
const volleyboll1 = require('./images/activities/volleyball1.jpg');
const read = require('./images/read.png');
const work1 = require('./images/work/work1.png');


class Slides extends Component {
    render() {
        return(
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={work1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bike}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gym1}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pingpong}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={run}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={volleyboll1}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={read}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slides;
