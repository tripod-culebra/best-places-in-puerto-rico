import React, { useState } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

const DOMAIN = process.env.REACT_APP_DOMAIN;

const PlacesBeenForm = ({ setPlaces, completed }) => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        what: '',
        when: '',
        who: '',
        rating: '',
        completed: true,
    });

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post(`${DOMAIN}/api/places`, { form })
            .then(() => axios.get(`${DOMAIN}/api/places?completed=${completed}`))
            .then(({ data }) => setPlaces(data))
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
                    <label htmlFor="placesBeen">
                        <span>Place I Visted</span>
                        <input
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            value={form.name}
                            type="text"
                            placeholder="Enter Place Visted"
                            id="placesBeen"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="descriptionBeen">
                        <span>Description Of Location</span>
                        <textarea
                            onChange={e => setForm({ ...form, description: e.target.value })}
                            value={form.description}
                            placeholder="Enter Desctiption"
                            id="descriptionBeen"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="whatBeen">
                        <span>What Did You Do?</span>
                        <textarea
                            onChange={e => setForm({ ...form, what: e.target.value })}
                            value={form.what}
                            placeholder="Enter What You Did"
                            id="whatBeen"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="whenBeen">
                        <span>When Did You Go?</span>
                        <input
                            onChange={e => setForm({ ...form, when: e.target.value })}
                            value={form.when}
                            type="date"
                            id="whenBeen"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="whoBeen">
                        <span>Who Went?</span>
                        <textarea
                            onChange={e => setForm({ ...form, who: e.target.value })}
                            value={form.who}
                            placeholder="Enter Who Went"
                            id="whoBeen"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="ratingBeen">
                        <span className="required">Enter A Rating From 1-5</span>
                        <input
                            onChange={e => setForm({ ...form, rating: e.target.value })}
                            value={form.rating}
                            type="number"
                            id="ratingBeen"
                            min="1"
                            max="5"
                            placeholder="Enter Rating"
                            required
                        />
                    </label>
                </div>
                <div>
                    <button name="submit" type="submit" id="submitBeen">
                        SAVE THE PLACE YOU HAVE BEEN
                    </button>
                </div>
            </form>
        </div>
    );
};

PlacesBeenForm.propTypes = {
    setPlaces: propTypes.func.isRequired,
    completed: propTypes.bool.isRequired,
};

export default PlacesBeenForm;
