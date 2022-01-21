import React from 'react';
import backgroundImage from '../../../assets/PROceanPark.jpeg';

const data = [
    {
        places: 'la parguera',
        description: 'best boating place',
        what: 'take small boat to man groves',
        when: '1, 1, 2022',
        who: 'ali',
        rating: 5,
    },
    {
        places: 'culebra',
        description: 'best small island nearby',
        what: 'small island with stellar beaches',
        when: '12, 15, 2021',
        who: 'sofia',
        rating: 5,
    },
    {
        places: 'cabo rojo',
        description: 'best sunset on the island',
        what: 'calm waters and always sunny',
        when: '10, 5, 2021',
        who: 'ali and sofia',
        rating: 5,
    },
];

const PlacesIHaveBeen = () => (
    <div>
        <img src={backgroundImage} className="background" alt="Ocean Park" />
        <h1 className="header">Places I Have Been!</h1>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Places I Have Visted</th>
                        <th>Description of Location</th>
                        <th>What I Did</th>
                        <th>When I Went</th>
                        <th>Who Went?</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                {data.map(val => (
                    <tbody>
                        <tr>
                            <td>{val.places}</td>
                            <td>{val.description}</td>
                            <td>{val.what}</td>
                            <td>{val.when}</td>
                            <td>{val.who}</td>
                            <td>{val.rating}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
        <div id="contact-form">
            <div>
                <h1>Enter A Magical Place You Have Been!</h1>
                <h4>Let history show your adventure!!</h4>
            </div>
            <p id="failure">Oopsie...adventure not sent.</p>
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
    </div>
);

export default PlacesIHaveBeen;
