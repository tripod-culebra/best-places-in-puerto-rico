const { Router } = require('express');
const db = require('../db/index');

const Places = Router();
Places.post('/PlacesIWantToGo', (req, res) =>
    db
        .savePlace()
        .then(results => {
            console.info(results, 'results in placesIWantToGo api/places');
            res.send(results);
            res.status(201);
        })
        .catch(error => {
            res.sendStatus(500);
            console.error(error, 'error getting repos repos.js');
        })
);

module.exports = {
    Places,
};
