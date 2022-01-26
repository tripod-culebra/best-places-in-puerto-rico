import React, { useState } from 'react';
import backgroundImage from '../../../assets/PROceanPark.jpeg';
import PlacesBeenForm from '../../forms/PlacesBeenForm';

const PlacesIHaveBeen = () => {
    const { data } = useState([]);
    return (
        <>
            <img src={backgroundImage} className="background" alt="Ocean Park" />
            <h1 className="header">Places I Have Been!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Places I Have Visted</th>
                            <th>Description of Location</th>
                            <th>What I Did</th>
                            <th>When I Went</th>
                            <th>Who Went?</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    {data.map(({ places, description, what, when, who, rating, id }) => (
                        <tbody key={id}>
                            <tr>
                                <td>{places}</td>
                                <td>{description}</td>
                                <td>{what}</td>
                                <td>{when}</td>
                                <td>{who}</td>
                                <td>{rating}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <PlacesBeenForm />
        </>
    );
};

export default PlacesIHaveBeen;
