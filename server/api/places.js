const { Router } = require('express');
const db = require('../db/index');

const Places = Router();

Places.post('/', (req, res) =>
    db
        .savePlace(req.body.formData)
        .then(results => {
            console.info(results, 'results in post placesIWantToGo api/places');
            res.send(results);
            res.status(201);
        })
        .catch(error => {
            res.sendStatus(500);
            console.error(error, 'error getting placesIWantToGo api/places');
        })
);

Places.post('/been', (req, res) =>
    db
        .savePlace(req.body.formData)
        .then(response => {
            console.info(response, 'response in post placesBeen api/places');
            res.send(response);
            res.status(201);
        })
        .catch(error => {
            res.sendStatus(500);
            console.error(error, 'error saving placesBeen api/places');
        })
);

Places.get('/', (req, res) =>
    db
        .getTopPlaces()
        .then(results => {
            console.info(results, 'results in getting placeGo api/places');
            res.status(201).send(results);
        })
        .catch(error => {
            res.status(500).json(JSON.stringify({ results: 'Okay' }));
            console.error(error, 'error getting placeGo api/places');
        })
);

Places.get('/been', (req, res) => {
    db.getTopPlacesBeen()
        .then(results => {
            console.info(results, 'results getting placebeen api/places');
            res.status(201).send(results);
        })
        .catch(error => {
            res.status(500).json(JSON.stringify({ results: 'Okay' }));
            console.error(error, 'error getting placebeen api/places');
        });
});

Places.put('/update', (req, res) => {
    const updateId = Object.keys(req.body);
    db.updatePlaceBeen(updateId)
        .then(response => {
            console.info(response, 'response in update placesIWantToGo api/places');
            res.status(201).send(response);
        })
        .catch(error => {
            res.status(500).json(JSON.stringify({ results: 'Okay' }));
            console.error(error, 'error update in placeBeen api/places');
        });
});

Places.delete(`/delete`, (req, res) => {
    const deleteId = Object.values(req.body);
    db.deletePlaceBeen(deleteId)
        .then(response => {
            console.info(response, 'response in deleting placesIWantToGo api/places');
            res.status(201).send(response);
        })
        .catch(error => {
            res.status(500).json(JSON.stringify({ results: 'Okay' }));
            console.error(error, 'error deleting in placeBeen api/places');
        });
});

module.exports = {
    Places,
};
