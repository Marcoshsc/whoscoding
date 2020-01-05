import React, { useState, useEffect } from 'react';
import './formStyle.css';
import '../mainPage/indexMainPage.css';

function Form(props) {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    function handleChange(e, callback) {
        callback(e.target.value);
    }

    function handleSubmit() {

    }

    return (
        <div id="wrapper">
            <form onSubmit={handleSubmit} className="login-form">
                <div id="inputs">
                    <input type="text" value={username} onChange={(e) => handleChange(e, setUsername)} placeholder="User Name"/>
                    <input type="password" value={password} onChange={(e) => handleChange(e, setPassword)} placeHolder="Password"/>
                </div>
                <div id="buttons" className={"form-buttons"}>
                    <button id="submit-button" type="submit" value="submit">Login</button>
                    <button id="sign-up-button">Sign up</button> 
                    <button id="forgot-my-password-button">Forgot My Password</button>
                </div>
            </form>
        </div>
    )
}

export default Form;