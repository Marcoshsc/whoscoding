import React from 'react';
import From from './form.js';

function LoginPage(props) {
    return (
        <div id={"login-page"}>
            <button onClick={props.back}>Return Home</button>
            <Form/>
        </div>
    )
}

export default LoginPage;