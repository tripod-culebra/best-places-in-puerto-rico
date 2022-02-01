import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlacesBeenForm from '../../forms/PlacesBeenForm';

const DOMAIN = process.env.REACT_APP_DOMAIN;

const PlacesIHaveBeen = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${DOMAIN}api/places/been`).then(result => {
            setData(result.data);
        });
    }, []);
    return (
        <div>
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
            <PlacesBeenForm setData={setData} />
        </div>
    );
};

export default PlacesIHaveBeen;
