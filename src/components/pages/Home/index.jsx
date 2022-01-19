import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { upperFirst } from 'lodash';
import imageStyles from '../../index.module.css';
import pageStyles from '../index.module.css';
import backGroundImage from '../../../assets/PR_Condodo.jpeg';

const Home = () => {
    const { user } = useAuth0();
    return (
        <>
            <img src={backGroundImage} className={imageStyles.backGround} alt="" />
            <h1 className={pageStyles.header}>
                Bienvenidos a Puerto Rico {upperFirst(user.given_name)}!
            </h1>
        </>
    );
};

export default Home;
