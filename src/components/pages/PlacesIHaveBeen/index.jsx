/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
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
                {data.map((val, key) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <tbody key={key}>
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
        <div className="container">
            <form className="form">
                {/* <h2>Enter Places You Have Been</h2> */}
                <label htmlFor="places">Places I Have Visited</label>
                <input type="text" id="places" placeholder="Enter Place" />
                <br />
                <label htmlFor="description">A Description Of The Place</label>
                <textarea
                    id="description"
                    placeholder="Enter Description"
                    rows="5"
                    cols="10"
                    wrap="soft"
                />
                <br />
                <label htmlFor="what">What I Did?</label>
                <textarea
                    type="text"
                    id="what"
                    placeholder="Enter What You Did"
                    rows="5"
                    cols="10"
                    wrap="soft"
                />
                <br />
                <label htmlFor="when">When I Went?</label>
                <input type="date" id="when" />
                <br />
                <label htmlFor="who">Who I Went With?</label>
                <input type="text" id="who" placeholder="Enter Who You Went With" />
                <br />
                <label htmlFor="rating">Give A Rating From 1 - 5</label>
                <input type="number" id="rating" min="1" max="5" placeholder="Enter Rating 1-5" />
                <br />
                <br />
                <input type="submit" id="submit" />
            </form>
        </div>
    </div>
);

export default PlacesIHaveBeen;
