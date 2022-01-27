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
        .then(results => {
            console.info(results, 'results in post placesBeen api/places');
            res.send(results);
            res.status(201);
        })
        .catch(error => {
            res.sendStatus(500);
            console.error(error, 'error getting placesBeen api/places');
        })
);

Places.get('/', (req, res) =>
    db
        .getTop25Places()
        .then(results => {
            console.info(results, 'results in get placesIWantToGo api/places');
            res.status(201).send(results);
        })
        .catch(error => {
            res.status(500).json(JSON.stringify({ results: 'Okay' }));
            console.error(error, 'error getting repos repos.js');
        })
);

Places.get('/been', (req, res) =>
    db
        .getTop25PlacesBeen()
        .then(results => {
            console.info(results, 'results in get placesIWantToGo api/places');
            res.status(201).send(results);
        })
        .catch(error => {
            res.status(500).json(JSON.stringify({ results: 'Okay' }));
            console.error(error, 'error getting repos repos.js');
        })
);

module.exports = {
    Places,
};
