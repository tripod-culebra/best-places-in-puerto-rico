import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Places = ({ title, tableCols, isChangeDelete, showRating, PlacesForm }) => {
    const [data, setData] = useState([]);

    return (
        <div>
            <h1 className="header">{title}</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            {tableCols.map(tableCol => (
                                <th key={Math.random()}>{tableCol}</th>
                            ))}
                        </tr>
                    </thead>
                    {data.map(({ place, description, what, when, who, rating, _id: id }) => (
                        <tbody key={id}>
                            <tr>
                                <td>{place}</td>
                                <td>{description}</td>
                                <td>{what}</td>
                                <td>{moment(when).format('MMMM Do YYYY')}</td>
                                <td>{who}</td>
                                {showRating && <td>{rating}</td>}
                                <td>
                                    {isChangeDelete ? (
                                        <button
                                            type="button"
                                            className="places-button delete-button"
                                        >
                                            Delete
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="places-button update-button"
                                        >
                                            Completed
                                        </button>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <PlacesForm setData={setData} />
        </div>
    );
};

Places.propTypes = {
    title: PropTypes.string.isRequired,
    tableCols: PropTypes.instanceOf(Array).isRequired,
    isChangeDelete: PropTypes.bool.isRequired,
    showRating: PropTypes.bool.isRequired,
    PlacesForm: PropTypes.func.isRequired,
};

export default Places;
