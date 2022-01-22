import React from 'react';
import backgroundImage from '../../../assets/PROceanPark.jpeg';
import PlacesBeenForm from '../../forms/PlacesBeenForm';

const data = [
    {
        id: 23423,
        places: 'la parguera',
        description: 'best boating place',
        what: 'take small boat to man groves',
        when: '1, 1, 2022',
        who: 'ali',
        rating: 5,
    },
    {
        id: 23424,
        places: 'culebra',
        description: 'best small island nearby',
        what: 'small island with stellar beaches',
        when: '12, 15, 2021',
        who: 'sofia',
        rating: 5,
    },
    {
        id: 23425,
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
                {data.map(val => {
                    const { places, description, what, when, who, rating, id } = val;
                    return (
                        <tbody key={id}>
                            <tr>
                                <td>{places}</td>
                                <td>{description}</td>
                                <td>{what}</td>
                                <td>{when}</td>
                                <td>{who}</td>
                                <td>{rating}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
        <PlacesBeenForm />
    </div>
);

export default PlacesIHaveBeen;
