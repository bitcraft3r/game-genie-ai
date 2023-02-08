import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
// import { TwitterButton } from 'react-twitter-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const Signin = () => {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user != null) {
            navigate('/account');
        }
    }, [user])

    return (
        <div className="container">
            <GoogleButton onClick={handleGoogleSignIn} />
        </div>
    )
};

export default Signin;