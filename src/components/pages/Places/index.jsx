import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment';

const DOMAIN = process.env.REACT_APP_DOMAIN;

const Places = ({
    title,
    tableCols,
    showRating,
    PlacesForm,
    completed,
    isChangeUpdate,
    updateButton,
}) => {
    const [places, setPlaces] = useState([]);
    const getPlacesData = () =>
        axios
            .get(`${DOMAIN}/api/places?completed=${completed}`)
            .then(({ data }) => setPlaces(data))
            .catch(error => console.error(error, 'Error: Places Not Found'));

    useEffect(getPlacesData, [completed]);

    const handlePlacesDelete = id =>
        axios
            .delete(`${DOMAIN}/api/places/${id}`)
            .then(getPlacesData)
            .catch(error => console.error(error, 'Error: Deleting Place'));

    const handlePlacesUpdate = id =>
        axios
            .put(`${DOMAIN}/api/places/${id}`, { completed: isChangeUpdate })
            .then(getPlacesData)
            .catch(error => console.error(error, 'Error: Updating Place'));

    return (
        <div>
            <h1 className="header">{title}</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            {tableCols.map(tableCol => (
                                <th key={tableCol}>{tableCol}</th>
                            ))}
                        </tr>
                    </thead>
                    {places.map(({ name, description, what, when, who, rating, _id: id }) => (
                        <tbody key={id}>
                            <tr>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>{what}</td>
                                <td>{moment(when).format('MMMM Do YYYY')}</td>
                                <td>{who}</td>
                                {showRating && <td>{rating}</td>}
                                <td>
                                    <button
                                        type="button"
                                        className="places-button update-button"
                                        onClick={() => handlePlacesUpdate(id)}
                                    >
                                        {updateButton}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="places-button delete-button"
                                        onClick={() => handlePlacesDelete(id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <PlacesForm setPlaces={setPlaces} completed={completed} />
        </div>
    );
};

Places.propTypes = {
    title: PropTypes.string.isRequired,
    tableCols: PropTypes.instanceOf(Array).isRequired,
    showRating: PropTypes.bool.isRequired,
    PlacesForm: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    isChangeUpdate: PropTypes.bool.isRequired,
    updateButton: PropTypes.string.isRequired,
};

export default Places;
