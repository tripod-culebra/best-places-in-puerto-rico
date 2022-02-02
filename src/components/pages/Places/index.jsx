import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import PlacesBeenForm from '../../forms/PlacesBeenForm';
import PlacesGoForm from '../../forms/PlacesGoForm';

const DOMAIN = process.env.REACT_APP_DOMAIN;

const Places = ({ placeSelector }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`${DOMAIN}api/places`)
            .then(result => setData(result.data))
            .catch(error => console.error(error, 'Error: Data Not Found'));
    }, []);

    const handlePlacesBeenChange = _id => {
        axios
            .delete(`${DOMAIN}api/places/delete`, { data: { _id } })
            .then(response => {
                axios.get(`${DOMAIN}api/places/been`).then(result => setData(result.data));
                console.info(response, 'Success: Deleted Place');
            })
            .catch(error => {
                console.error(error, 'Error: Deleting Place');
            });
    };

    const handlePlacesGoChange = _id => {
        axios
            .put(`${DOMAIN}api/places/update`, _id)
            .then(response => {
                console.info(response, 'Success: Updating Place');
                axios.get(`${DOMAIN}api/places`).then(result => setData(result.data));
            })
            .catch(error => {
                console.error(error, 'Error: Updating Place');
            });
    };

    return (
        <div>
            {placeSelector === 'PlacesBeen' ? (
                <h1 className="header">Places I Have Been!</h1>
            ) : (
                <h1 className="header">Places I Want To Go!</h1>
            )}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            {placeSelector === 'PlacesBeen' ? (
                                <th>Places I Have Visted</th>
                            ) : (
                                <th>Places I Want To Go To</th>
                            )}
                            <th>Description of Location</th>
                            {placeSelector === 'PlacesBeen' ? (
                                <th>What I Did</th>
                            ) : (
                                <th>What I Want To Do</th>
                            )}
                            {placeSelector === 'PlacesBeen' ? (
                                <th>When I Went</th>
                            ) : (
                                <th>When I Want To Go</th>
                            )}
                            {placeSelector === 'PlacesBeen' ? <th>Who Went</th> : <th>With Who</th>}
                            {placeSelector === 'PlacesBeen' && <th>Rating</th>}
                            {placeSelector === 'PlacesBeen' && <th>Delete?</th>}
                            {placeSelector === 'PlacesGo' && <th>Completed?</th>}
                        </tr>
                    </thead>
                    {data.map(({ place, description, what, when, who, rating, _id: id }) => (
                        <tbody key={id}>
                            <tr>
                                <td>{place}</td>
                                <td>{description}</td>
                                <td>{what}</td>
                                <td>{when.slice(0, 10)}</td>
                                <td>{who}</td>
                                {placeSelector === 'PlacesBeen' && <td>{rating}</td>}
                                <td>
                                    {placeSelector === 'PlacesBeen' ? (
                                        <button
                                            type="button"
                                            className="delete-button"
                                            onClick={() => handlePlacesBeenChange(id)}
                                        >
                                            Delete
                                        </button>
                                    ) : (
                                        <input
                                            type="checkbox"
                                            className="check-box"
                                            onChange={() => handlePlacesGoChange(id)}
                                        />
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            {placeSelector === 'PlacesBeen' ? (
                <PlacesBeenForm setData={setData} />
            ) : (
                <PlacesGoForm setData={setData} />
            )}
        </div>
    );
};

Places.propTypes = {
    placeSelector: propTypes.func.isRequired,
};

export default Places;
