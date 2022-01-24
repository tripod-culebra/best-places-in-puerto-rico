import React from 'react';
import backgroundImage from '../../../assets/PRArecibo.jpeg';
import PlacesGoForm from '../../forms/PlacesGoForm';

const data = [
    {
        id: 23427,
        places: 'monkey island',
        description: 'monkeys with hepatitis',
        what: 'trave to island by boat on se of island',
        when: '6, 1, 2022',
        who: 'ali, warren',
        rating: 5,
    },
    {
        id: 23428,
        places: 'black sand beach',
        description: 'the sand is black',
        what: 'just chill on the shore',
        when: '5, 15, 2022',
        who: 'sofia',
        rating: 5,
    },
    {
        id: 23429,
        places: 'cueva de ventana',
        description: 'cave with a window overlooking countryside',
        what: '1.5 hour drive SE',
        when: '10, 5, 2022',
        who: 'ali and chase',
        rating: 5,
    },
];

const postPlace = place => {
    fetch('http://localhost:3000/PlacesIWantToGo', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify({ place }),
    })
        .then(res => {
            console.info(res, 'res posting placeIWantToGo');
        })
        .catch(error => {
            console.error(error, 'error in posting placeIWantToGo');
        });
};

postPlace();

const PlacesIWantToGo = () => (
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
            <PlacesGoForm />
        </div>
    </>
);
export default PlacesIWantToGo;
