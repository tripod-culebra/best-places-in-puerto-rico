import React from 'react';

const PlacesBeenForm = () => (
    <div id="places-form">
        <div>
            <h1>Enter A Magical Place You Have Been!</h1>
            <h4>Let history show your adventure!!</h4>
        </div>
        <p id="failure">Oopsie...Adventure not sent.</p>
        <p id="success">Your adventure was saved successfully. Memories made!</p>

        <form method="post" action="/">
            <div>
                <label htmlFor="PlacesIHaveBeen">
                    <span>Place I Visted</span>
                    <input
                        type="text"
                        placeholder="Enter Place Visted"
                        id="PlacesIHaveBeen"
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
                    <span>What Did You Do?</span>
                    <textarea placeholder="Enter What You Did" id="what" required="required" />
                </label>
            </div>
            <div>
                <label htmlFor="when">
                    <span>When Did You Go?</span>
                    <input type="date" id="when" required="required" />
                </label>
            </div>
            <div>
                <label htmlFor="who">
                    <span>Who Went?</span>
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
                    SAVE THE PLACE YOU HAVE BEEN
                </button>
            </div>
        </form>
    </div>
);
export default PlacesBeenForm;
