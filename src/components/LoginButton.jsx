/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import background from '../PRimage.jpeg';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <img src={background} id="bg" />
            <button type="button" onClick={() => loginWithRedirect()}>
                Log In
            </button>
            {/* <div style={{ backgroundImage: `url(${background})` }} /> */}
        </>
    );
};

export default LoginButton;
