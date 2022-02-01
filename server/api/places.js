const { Router } = require('express');
const db = require('../db/index');

const Places = Router();

Places.post('/', (req, res) =>
    db
        .savePlace(req.body.formData)
        .then(results => {
            res.send(results);
            res.status(201);
        })
        .catch(error => {
            res.sendStatus(500);
            console.error(error, 'Error: Saving Place');
        })
);

Places.post('/been', (req, res) =>
    db
        .savePlace(req.body.formData)
        .then(results => {
            res.send(results);
            res.status(201);
        })
        .catch(error => {
            res.sendStatus(500);
            console.error(error, 'Error: Saving Place');
        })
);

Places.get('/', (req, res) =>
    db
        .getTopPlaces()
        .then(results => res.status(201).send(results))
        .catch(error => {
            res.status(500).json(JSON.stringify({ results: 'Okay' }));
            console.error(error, 'Error: Getting Places');
        })
);

Places.get('/been', (req, res) =>
    db
        .getTopPlacesBeen()
        .then(results => res.status(201).send(results))
        .catch(error => {
            res.status(500).json(JSON.stringify({ results: 'Okay' }));
            console.error(error, 'Error: Getting Places');
        })
);

module.exports = {
    Places,
};
