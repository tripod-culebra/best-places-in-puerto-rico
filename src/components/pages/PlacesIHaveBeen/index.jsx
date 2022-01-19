import React from 'react';
import styles from '../../../index.module.css';
import backGroundImage from '../../../assets/PROceanPark.jpeg';

const PlacesIHaveBeen = () => (
    <>
        <img src={backGroundImage} className={styles.background} alt="Ocean Park" />
        <h1 className={styles.header}>Places I Have Been!</h1>
    </>
);

export default PlacesIHaveBeen;
