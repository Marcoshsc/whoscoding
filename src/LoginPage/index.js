import React from 'react';
import Form from './form.js';
import './loginPageStyle.css';
import '../mainPage/indexMainPage.css';
import '../aboutPage/indexAboutPage.css';

function LoginPage(props) {
    return (
        <div id={"login-page"} className={"about-page"}>
            <button onClick={props.back}>Return Home</button>
            <h1>Login to Who's Coding</h1>
            <Form/>
        </div>
    )
}

export default LoginPage;