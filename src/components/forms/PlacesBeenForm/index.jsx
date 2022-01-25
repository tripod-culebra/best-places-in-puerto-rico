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
                <label htmlFor="placesBeen">
                    <span>Place I Visted</span>
                    <input type="text" placeholder="Enter Place Visted" id="placesBeen" required />
                </label>
            </div>
            <div>
                <label htmlFor="descriptionBeen">
                    <span>Description Of Location</span>
                    <textarea placeholder="Enter Desctiption" id="descriptionBeen" required />
                </label>
            </div>
            <div>
                <label htmlFor="whatBeen">
                    <span>What Did You Do?</span>
                    <textarea placeholder="Enter What You Did" id="whatBeen" required />
                </label>
            </div>
            <div>
                <label htmlFor="whenBeen">
                    <span>When Did You Go?</span>
                    <input type="date" id="whenBeen" required />
                </label>
            </div>
            <div>
                <label htmlFor="whoBeen">
                    <span>Who Went?</span>
                    <textarea placeholder="Enter Who Went" id="whoBeen" required />
                </label>
            </div>
            <div>
                <label htmlFor="ratingBeen">
                    <span className="required">Enter A Rating From 1-5</span>
                    <input
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
export default PlacesBeenForm;
