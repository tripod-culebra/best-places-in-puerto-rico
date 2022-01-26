import axios from 'axios';
import React, { useState, useEffect } from 'react';
import backgroundImage from '../../../assets/PRArecibo.jpeg';
import PlacesGoForm from '../../forms/PlacesGoForm';

const PlacesIWantToGo = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/places').then(result => {
            setData(result.data);
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
                    {data.map(({ place, description, what, when, who, rating, _id }) => (
                        <tbody key={_id}>
                            <tr>
                                <td>{place}</td>
                                <td>{description}</td>
                                <td>{what}</td>
                                <td>{when}</td>
                                <td>{who}</td>
                                <td>{rating}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                <PlacesGoForm />
            </div>
        </>
    );
};

export default PlacesIWantToGo;
