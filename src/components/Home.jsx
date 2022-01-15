import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import buttonStyles from '../styles/button.module.css';
import imageStyles from '../styles/backGroundImages.module.css';
import pageStyles from '../styles/home.module.css';
import backGroundImage from '../assets/PR_Condodo.jpeg';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuth0();
    return (
        <>
            <img src={backGroundImage} className={imageStyles.backGround} alt="" />
            <h1 className={pageStyles.header}>{user.name} Bienvenidos to Puerto Rico!</h1>
            <button type="button" className={buttonStyles.home} onClick={() => navigate('/')}>
                Home
            </button>
            <button
                type="button"
                className={buttonStyles.places}
                onClick={() => navigate('/PlacesIWantToGo')}
            >
                Places I Want To Go!!
            </button>
            <button
                type="button"
                className={buttonStyles.places}
                onClick={() => navigate('/PlacesIHaveBeen')}
            >
                Places I Have Been!!
            </button>
            <LogoutButton />
        </>
    );
};

export default Home;
