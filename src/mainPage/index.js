import React from 'react';

function NavBar(props) {
    return (
        <div>
            <nav>
                <button>About us</button>
                <button>Login</button>
            </nav>
        </div>
    )
}

function MainPage(props) {
    return (
        <div id={"main"}>
            <h1>
                {"Who's coding?"}
            </h1>
            <h2>
                {"Coding Together"}
            </h2>
            <NavBar/>
        </div>
    )
}

export default MainPage;