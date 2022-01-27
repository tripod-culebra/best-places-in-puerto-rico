import axios from 'axios';
import React, { useState } from 'react';

const PlacesGoForm = () => {
    const [formData, setFormData] = useState({
        place: '',
        description: '',
        what: '',
        when: '',
        who: '',
        rating: '',
        completed: false,
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.info(formData, 'form data in handlesubmit');
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/places',
            data: { formData },
        })
            .then(res => {
                window.location.reload(false);
                console.info(res, 'submitted successfully');
            })
            .catch(error => console.error(error, 'error submitting form'));
    };

    return (
        <div id="places-form">
            <div>
                <h1>Enter A Magical You Want To Visit!</h1>
                <h4>Lets create memories!!</h4>
            </div>
            <p id="failure">Oopsie...Adventure not sent.</p>
            <p id="success">Your new adventure was saved successfully. Cant wait!</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="PlacesIWantToGo">
                        <span>Place I Want To Go To</span>
                        <input
                            onChange={e => setFormData({ ...formData, place: e.target.value })}
                            value={formData.place}
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
                            onChange={e =>
                                setFormData({ ...formData, description: e.target.value })
                            }
                            value={formData.description}
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
                            onChange={e => setFormData({ ...formData, what: e.target.value })}
                            value={formData.what}
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
                            onChange={e => setFormData({ ...formData, when: e.target.value })}
                            value={formData.when}
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
                            onChange={e => setFormData({ ...formData, who: e.target.value })}
                            value={formData.who}
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
                            onChange={e => setFormData({ ...formData, rating: e.target.value })}
                            value={formData.rating}
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
                    <button name="submit" type="submit" id="submit">
                        SAVE WHERE TO GO
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PlacesGoForm;
