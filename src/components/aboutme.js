import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Slides from  './carousel';


class Aboutme extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={7} className='about-text'>
                        <h1>About me</h1>
                        <p>I’m hardworking and self-motivated with a responsible attitude
                            towards work. I’m a quick learner and easily trained because I
                            have a great deal of self-motivation when it comes to achieving
                            both the goals my company sets and the ones I set myself. I enjoy
                            working in a team and under pressure and I love analysing
                            problems and finding solutions.
                        </p>
                        <p>
                            Currently, my priority is to begin my career as a Front-End
                            Developer so that I can use the skills I have obtained in a
                            professional environment. I am looking to further learn and
                            develop these skills in a company in which I can improve my
                            knowledge and experience, to realise my full potential. I would
                            like to contribute to the growth and development of the company
                            and participate in the production of quality and competitive
                            products.
                        </p>
                        <p>
                            I really like activities. Three days a week I go to the gym.
                            I like to run and ride a bike.
                            My favorite sport is volleyball, but I also like to play table tennis and soccer.
                        </p>
                        <p>
                            I like to read books. From the last read by me:
                        </p>
                            <ul>
                                <li>Screw it, let's do it. - Richard Branson</li>
                                <li>Rich Dad Poor Dad. - Robert Kiyosaki</li>
                                <li>How To Stop Worrying And Start Living - Dale Carnegie</li>
                                <li>Public Speaking A Practical Course For Business Men - Dale Carnegie</li>
                                <li>What Every BODY is Saying - Joe Navarro</li>
                            </ul>
                        <p>
                            And others books and articles.
                        </p>
                    </Cell>
                    <Cell col={5}>
                        <Slides />
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Aboutme;
