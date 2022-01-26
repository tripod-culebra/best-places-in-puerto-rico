/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import backgroundImage from '../../../assets/PRArecibo.jpeg';
import PlacesGoForm from '../../forms/PlacesGoForm';

const PlacesIWantToGo = () => {
    const [data, setData] = useState([]);
    const url = 'http://localhost:8080/api/places';
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    // const fetchData = () =>
    //     fetch(url, requestOptions)
    //         .then(results => {
    //             console.log(results.json(), 'got PlacesGo I want to go successfully');
    //             setData([results.json()]);
    //             console.info(data, 'DATAAAAAAAA');
    //         })
    //         .catch(error => console.error(error, 'error fetching data PlacesGo'));
    // useEffect(() => {
    //     fetchData();
    // }, []);
    useEffect(() => {
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.info(data, 'what');
                setData(data);
            });
    }, []);

    return (
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
                    {data.map(val => {
                        // {formData.map(val => {
                        /* {results.map(val => { */
                        const { places, description, what, when, who, rating, id } = val;
                        // const { description } = val;
                        console.info(data, 'WHAT IS THIS DESCRIPTION??');
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
                <PlacesGoForm />
            </div>
        </>
    );
    // });
};

export default PlacesIWantToGo;
