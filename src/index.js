import React, {useState, useEffect} from 'react';  
import ReactDOM from 'react-dom';
import MainPage from './mainPage/index.js';
import AboutPage from './aboutPage/index.js';
import LoginPage from './LoginPage/index.js';
import './index.css';

function change(id, callback) {
    function inner() {
        callback(id);
    }
    return inner;
}

function returnPage(id, callback=null) {
    switch(id) {
        case 0:
            return <MainPage about={change(1, callback)}
            login={change(2, callback)}/>
            break;
        case 1:
            return <AboutPage back={change(0, callback)}/>;
            break;
        case 2:
            return <LoginPage back={change(0, callback)}/>;
            break;
    }
}

function App(props) {
    let [showing, setShowing] = useState(0);
    return (
        <div id={"page-body"}>
            {returnPage(showing, setShowing)}
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
