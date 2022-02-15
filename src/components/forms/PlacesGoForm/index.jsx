import React, { useState } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

const DOMAIN = process.env.REACT_APP_DOMAIN;

const PlacesGoForm = ({ setPlaces, completed }) => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        what: '',
        when: '',
        who: '',
        rating: '',
        completed: false,
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
                <h1>Enter A Magical You Want To Visit!</h1>
                <h4>Lets create memories!!</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="PlacesIWantToGo">
                        <span>Place I Want To Go To</span>
                        <input
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            value={form.name}
                            type="text"
                            placeholder="Enter Place I Want To Go"
                            id="PlacesIWantToGo"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="description">
                        <span>Description Of Location</span>
                        <textarea
                            onChange={e => setForm({ ...form, description: e.target.value })}
                            value={form.description}
                            placeholder="Enter Desctiption"
                            id="description"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="what">
                        <span>What Do You Want To Do?</span>
                        <textarea
                            onChange={e => setForm({ ...form, what: e.target.value })}
                            value={form.what}
                            placeholder="Enter What You Want To Do"
                            id="what"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="when">
                        <span>When Do You Want To Go?</span>
                        <input
                            onChange={e => setForm({ ...form, when: e.target.value })}
                            value={form.when}
                            type="date"
                            id="when"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="who">
                        <span>Who Do You Want To Go?</span>
                        <textarea
                            onChange={e => setForm({ ...form, who: e.target.value })}
                            value={form.who}
                            placeholder="Enter Who Went"
                            id="who"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="rating">
                        <span className="required">Enter A Rating From 1-5</span>
                        <input
                            onChange={e => setForm({ ...form, rating: e.target.value })}
                            value={form.rating}
                            type="number"
                            id="rating"
                            min="1"
                            max="5"
                            placeholder="Enter Rating"
                            required
                        />
                    </label>
                </div>
                <div>
                    <button name="submit" type="submit">
                        SAVE WHERE TO GO
                    </button>
                </div>
            </form>
        </div>
    );
};

PlacesGoForm.propTypes = {
    setPlaces: propTypes.func.isRequired,
    completed: propTypes.bool.isRequired,
};

export default PlacesGoForm;
