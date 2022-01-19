import React from 'react';
import backGroundImage from '../../../assets/PRArecibo.jpeg';
import styles from '../../../index.module.css';

const PlacesIWantToGo = () => (
    <>
        <img src={backGroundImage} className={styles.background} alt="Arecibo" />
        <h1 className={styles.header}>Places I Want To Go!</h1>
    </>
);
export default PlacesIWantToGo;
