import React from 'react';
import './indexMainPage.css';
import MainContent from './main-content.js';

function NavBar(props) {
    return (
        <div className={'main-nav-bar'}>
            <nav>
                <button onClick={props.about}>About us</button>
                <button onClick={props.login}>Login</button>
            </nav>
        </div>
    )
}

function MainPage(props) {
    return (
        <div id={"main"} class={'intro-page'}>
            <div>
                <h1>
                    {"Who's coding?"}
                </h1>
                <h2>
                    {"Coding Together is Always Better"}
                </h2>
            </div>
            <div>
                <NavBar about={props.about} login={props.login}/>
            </div>
            <MainContent/>
            <footer>
                {'Created By Marcoshsc, 2020. All Rights reserved.'}
            </footer>
        </div>
    )
}

export default MainPage;