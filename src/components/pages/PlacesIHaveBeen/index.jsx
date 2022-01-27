import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../../../assets/PROceanPark.jpeg';
import PlacesBeenForm from '../../forms/PlacesBeenForm';

const PlacesIHaveBeen = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/places/been').then(result => {
            setData(result.data);
        });
    }, []);
    return (
        <div>
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
                    {data.map(({ place, description, what, when, who, rating, _id }) => (
                        <tbody key={_id}>
                            <tr>
                                <td>{place}</td>
                                <td>{description}</td>
                                <td>{what}</td>
                                <td>{when.slice(0, 10)}</td>
                                <td>{who}</td>
                                <td>{rating}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <PlacesBeenForm />
        </div>
    );
};

export default PlacesIHaveBeen;
