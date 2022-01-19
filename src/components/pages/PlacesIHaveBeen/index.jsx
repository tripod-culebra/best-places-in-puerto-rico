import React from 'react';
import pageStyles from '../index.module.css';
import imageStyles from '../../index.module.css';
import backGroundImage from '../../../assets/PR_OceanPark.jpeg';

const PlacesIHaveBeen = () => (
    <>
        <img src={backGroundImage} className={imageStyles.backGround} alt="" />
        <h1 className={pageStyles.header}>Places I Have Been!</h1>
    </>
);

export default PlacesIHaveBeen;
