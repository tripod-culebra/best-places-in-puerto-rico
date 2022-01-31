import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlacesBeenForm from '../../forms/PlacesBeenForm';

const PlacesIHaveBeen = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/places/been').then(result => {
            setData(result.data);
        });
    }, []);

    const handleChange = _id => {
        axios
            .delete(`http://localhost:8080/api/places/delete`, { data: { _id } })
            .then(response => {
                console.info(response, 'success in deleting place in placesihavebeen');
                window.location.reload(false);
            })
            .catch(error => {
                console.error(error, 'error in deleting place in placesihavebeen');
            });
    };

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
                            <th>Delete?</th>
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
                                <td>
                                    <input
                                        type="checkbox"
                                        className="check-box"
                                        onChange={() => handleChange(_id)}
                                    />
                                </td>
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
