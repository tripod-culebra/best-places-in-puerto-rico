import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { upperFirst } from 'lodash';
import backgroundImage from '../../../assets/PRCondado.jpeg';

const Home = () => {
    const {
        user: { given_name: givenName },
    } = useAuth0();
    return (
        <>
            <img src={backgroundImage} className="background" alt="Condado" />
            <h1 className="header">Bienvenidos a Puerto Rico {upperFirst(givenName)}!</h1>
        </>
    );
};

export default Home;
