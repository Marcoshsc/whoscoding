import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MainPage from './mainPage/index.js'

function change(page, callback) {
    function inner() {
        callback(page);
    }
    return inner;
}

function App(props) {
    let [showing, setShowing] = useState(<MainPage/>);
    return (
        <div>
            {showing}
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
