import React from "react";
import {useHistory} from "react-router-dom";

function LoginPage({toggleIsAuthenticated}) {
    const history = useHistory()
    return <>
        <button type='button' onClick={() => {
            toggleIsAuthenticated(true)
            history.push('/BlogPosts')
        }}>Inloggen
        </button>
    </>
}

export default LoginPage