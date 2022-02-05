import React, { useState } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

const DOMAIN = process.env.REACT_APP_DOMAIN;

const PlacesBeenForm = ({ setData }) => {
    const [formData, setFormData] = useState({
        place: '',
        description: '',
        what: '',
        when: '',
        who: '',
        rating: '',
        completed: true,
    });

    const handleSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${DOMAIN}/api/places/save`,
            data: { formData },
        })
            .then(() => axios.get(`${DOMAIN}/api/places/been`).then(result => setData(result.data)))
            .catch(error => console.error(error, 'Error: Form Not Saved'));
    };

    return (
        <div id="places-form">
            <div>
                <h1>Enter A Magical Place You Have Been!</h1>
                <h4>Let history show your adventure!!</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="PlacesIHaveBeen">
                        <span>Place I Visted</span>
                        <input
                            onChange={e => setFormData({ ...formData, place: e.target.value })}
                            type="text"
                            placeholder="Enter Place Visted"
                            id="PlacesIHaveBeen"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="description">
                        <span>Description Of Location</span>
                        <textarea
                            onChange={e =>
                                setFormData({ ...formData, description: e.target.value })
                            }
                            placeholder="Enter Desctiption"
                            id="description"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="what">
                        <span>What Did You Do?</span>
                        <textarea
                            onChange={e => setFormData({ ...formData, what: e.target.value })}
                            placeholder="Enter What You Did"
                            id="what"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="when">
                        <span>When Did You Go?</span>
                        <input
                            onChange={e => setFormData({ ...formData, when: e.target.value })}
                            type="date"
                            id="when"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="who">
                        <span>Who Went?</span>
                        <textarea
                            onChange={e => setFormData({ ...formData, who: e.target.value })}
                            placeholder="Enter Who Went"
                            id="who"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="subject">
                        <span className="required">Enter A Rating From 1-5</span>
                        <input
                            onChange={e => setFormData({ ...formData, rating: e.target.value })}
                            type="number"
                            id="subject"
                            min="1"
                            max="5"
                            placeholder="Enter Rating"
                            required
                        />
                    </label>
                </div>
                <div>
                    <button name="submit" type="submit">
                        SAVE THE PLACE YOU HAVE BEEN
                    </button>
                </div>
            </form>
        </div>
    );
};

PlacesBeenForm.propTypes = {
    setData: propTypes.func.isRequired,
};

export default PlacesBeenForm;
