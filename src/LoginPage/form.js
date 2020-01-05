import React, { useState } from 'react';

function Form(props) {
    let [username, setUsername] = useState("");

    function handleChange()

    return (
        <form>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="User Name"/>
        </form>
    )
}

export default Form;