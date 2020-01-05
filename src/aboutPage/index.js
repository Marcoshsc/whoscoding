import React from 'react';
import '../mainPage/indexMainPage.css';
import './indexAboutPage.css';

function AboutPage(props) {
    return (
        <div id={'about-page'} className={'intro-page about-page'}>
            <button onClick={props.back}>Return Home</button>
            <h1>
                {"About us"}
            </h1>
            <div id={'content'}>
                <p>
                    {"Who's coding is a platform where you can learn and enjoy programming with people around " + 
                    "the world. You can find new collaborators to your personal projects, or join already listed " +
                    "projects in the platform. All programming levels allowed. Programming on!"}
                </p>
            </div>
        </div>
    )
}

export default AboutPage;