const { Router } = require('express');
const db = require('../db/index');

const Places = Router();

Places.get('/', (_, res) =>
    db
        .getTopPlacesGo()
        .then(places => res.status(200).send(places))
        .catch(error => {
            res.status(500);
            console.error(error, 'Error: Getting Places');
        })
);

Places.post('/', (req, res) =>
    db
        .savePlace(req.body.form)
        .then(successMessage => res.status(201).send(successMessage))
        .catch(error => {
            res.sendStatus(500);
            console.error(error, 'Error: Saving Place');
        })
);

Places.put('/', (req, res) =>
    db
        .updatePlaceGo(req.body.id)
        .then(successMessage => res.status(201).send(successMessage))
        .catch(error => {
            res.status(500);
            console.error(error, 'Error: Updating Place I Want To Go');
        })
);

module.exports = { Places };
