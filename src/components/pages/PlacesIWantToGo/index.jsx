import React from 'react';
import backGroundImage from '../../../assets/PR_Arecibo.jpeg';
import imageStyles from '../../index.module.css';
import pageStyles from '../index.module.css';

const PlacesIWantToGo = () => (
    <>
        <img src={backGroundImage} className={imageStyles.backGround} alt="" />
        <h1 className={pageStyles.header}>Places I Want To Go!</h1>
    </>
);
export default PlacesIWantToGo;
