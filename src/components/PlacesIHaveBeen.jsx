import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import styles from '../styles/button.module.css';
import pageStyles from '../styles/placesIHaveBeen.module.css';
import imageStyles from '../styles/backGroundImages.module.css';
import backGroundImage from '../assets/PR_OceanPark.jpeg';

const PlacesIHaveBeen = () => {
    const navigate = useNavigate();
    return (
        <>
            <img src={backGroundImage} className={imageStyles.backGround} alt="" />
            <h1 className={pageStyles.header}>Places I Have Been!</h1>
            <button type="button" className={styles.home} onClick={() => navigate('/')}>
                Home
            </button>
            <button
                type="button"
                className={styles.places}
                onClick={() => navigate('/PlacesIWantToGo')}
            >
                Places I Want To Go!!
            </button>
            <button
                type="button"
                className={styles.places}
                onClick={() => navigate('/PlacesIHaveBeen')}
            >
                Places I Have Been!!
            </button>
            <LogoutButton />
        </>
    );
};
export default PlacesIHaveBeen;
