import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <p>Please log in to continue.</p>
            {/* This link points directly to your backend's OAuth endpoint */}
            <a href="http://localhost:8080/oauth2/authorization/google">
                Login with Google
            </a>
        </div>
    );
};

export default Login;