/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
// import React, { useState } from 'react';
import React from 'react';
import backgroundImage from '../../../assets/PRArecibo.jpeg';
import PlacesGoForm from '../../forms/PlacesGoForm';

// const data = [
//     {
//         id: 23427,
//         places: 'monkey island',
//         description: 'monkeys with hepatitis',
//         what: 'trave to island by boat on se of island',
//         when: '6, 1, 2022',
//         who: 'ali, warren',
//         rating: 5,
//     },
//     {
//         id: 23428,
//         places: 'black sand beach',
//         description: 'the sand is black',
//         what: 'just chill on the shore',
//         when: '5, 15, 2022',
//         who: 'sofia',
//         rating: 5,
//     },
//     {
//         id: 23429,
//         places: 'cueva de ventana',
//         description: 'cave with a window overlooking countryside',
//         what: '1.5 hour drive SE',
//         when: '10, 5, 2022',
//         who: 'ali and chase',
//         rating: 5,
//     },
// ];

const PlacesIWantToGo = () => {
    const url = 'http://localhost:8080/api/places';
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ formData }),
    };
    fetch(url, requestOptions).then(results => {
        console.info(results, 'got PlacesGo I want to go successfully');
        // return 'hello world';
        // })
        // .catch(error => console.error(error, 'error getting placesGo form'));
        return (
            // need to make an api call
            <>
                <img src={backgroundImage} className="background" alt="Arecibo" />
                <h1 className="header">Places I Want To Go!</h1>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Places I Want To Go To</th>
                                <th>Description of Location</th>
                                <th>What I Want To Do</th>
                                <th>When I Want To Go</th>
                                <th>With Who?</th>
                                <th>Rating</th>
                                <th>Completed?</th>
                            </tr>
                        </thead>
                        {/* {formData.map(val => { */}
                        {/* {results.map(val => { */}
                        {/* {let tempResult = results[0]  */}
                        {/* // const { place, description, what, when, who, rating, id } = val; */}
                        {/* {const { place, description, what, when, who, rating, id } = results[0]; */}
                        {/* return ( */}
                        <tbody key={results.id}>
                            <tr>
                                <td>{results.place}</td>
                                <td>{results.description}</td>
                                <td>{results.what}</td>
                                <td>{results.when}</td>
                                <td>{results.who}</td>
                                <td>{results.rating}</td>
                            </tr>
                        </tbody>
                        );
                    </table>
                    {/* <PlacesGoForm formData={formData} /> */}
                    <PlacesGoForm />
                </div>
            </>
        );
    });
};

export default PlacesIWantToGo;
