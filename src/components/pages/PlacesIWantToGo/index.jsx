import React, { useState } from 'react';
import backgroundImage from '../../../assets/PRArecibo.jpeg';
import PlacesGoForm from '../../forms/PlacesGoForm';

const PlacesIWantToGo = () => {
    const { data } = useState([]);
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
                    {data.map(({ places, description, what, when, who, rating, id }) => (
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
                    ))}
                </table>
                <PlacesGoForm />
            </div>
        </>
    );
};
export default PlacesIWantToGo;
