import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import buttonStyles from '../styles/button.module.css';
import backGroundImage from '../assets/PR_Arecibo.jpeg';
import imageStyles from '../styles/backGroundImages.module.css';
import pageStyles from '../styles/placesIWantToGo.module.css';

const PlacesIWantToGo = () => {
    const navigate = useNavigate();
    return (
        <>
            <img src={backGroundImage} className={imageStyles.backGround} alt="" />
            <h1 className={pageStyles.header}>Places I Want To Go!</h1>
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
export default PlacesIWantToGo;
