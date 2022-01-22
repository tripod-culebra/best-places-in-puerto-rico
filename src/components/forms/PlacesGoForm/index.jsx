import React from 'react';

const PlacesGoForm = () => (
    <div id="places-form">
        <div>
            <h1>Enter A Magical You Want To Visit!</h1>
            <h4>Lets create memories!!</h4>
        </div>
        <p id="failure">Oopsie...Adventure not sent.</p>
        <p id="success">Your new adventure was saved successfully. Cant wait!</p>

        <form method="post" action="/">
            <div>
                <label htmlFor="PlacesIWantToGo">
                    <span>Place I Want To Go To</span>
                    <input
                        type="text"
                        placeholder="Enter Place I Want To Go"
                        id="PlacesIWantToGo"
                        required="required"
                    />
                </label>
            </div>
            <div>
                <label htmlFor="description">
                    <span>Description Of Location</span>
                    <textarea
                        placeholder="Enter Desctiption"
                        id="description"
                        required="required"
                    />
                </label>
            </div>
            <div>
                <label htmlFor="what">
                    <span>What Do You Want To Do?</span>
                    <textarea
                        placeholder="Enter What You Want To Do"
                        id="what"
                        required="required"
                    />
                </label>
            </div>
            <div>
                <label htmlFor="when">
                    <span>When Do You Want To Go?</span>
                    <input type="date" id="when" required="required" />
                </label>
            </div>
            <div>
                <label htmlFor="who">
                    <span>Who Do You Want To Go?</span>
                    <textarea placeholder="Enter Who Went" id="who" required="required" />
                </label>
            </div>
            <div>
                <label htmlFor="subject">
                    <span className="required">Enter A Rating From 1-5</span>
                    <input
                        type="number"
                        id="subject"
                        min="1"
                        max="5"
                        placeholder="Enter Rating"
                        required="required"
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
export default PlacesGoForm;
