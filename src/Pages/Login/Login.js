import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

import './Login.css';
const Login = () => {
    const { handleGoogleLogin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const signInUsingGoogle = () => {
        handleGoogleLogin()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    // const signInUsingGithub = () => {
    //     handleGithubLogin()
    // }
    return (
        <div className='login-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login">
                            <div className='login-header'>
                                <h3>Member Login</h3>
                            </div>
                            <div className="login-button mt-3">
                                <button onClick={signInUsingGoogle} className='login-google-button me-3'><i className="fab fa-google"></i> Sing In Google</button>
                                {/* <button onClick={signInUsingGithub} className='login-github-button'><i className="fab fa-github"></i> Sing In GitHub</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;