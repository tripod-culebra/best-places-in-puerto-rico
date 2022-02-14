const { Router } = require('express');
const db = require('../db/index');

const Places = Router();

Places.get('/', (req, res) =>
    db
        .getTopPlaces(req.query.completed)
        .then(places => res.status(200).send(places))
        .catch(error => {
            res.status(404);
            console.error(error, 'Error: Getting Places');
        })
);

Places.post('/', (req, res) =>
    db
        .savePlace(req.body.form)
        .then(successMessage => res.status(201).send(successMessage))
        .catch(error => {
            res.sendStatus(404);
            console.error(error, 'Error: Saving Place');
        })
);

Places.put('/:id', (req, res) =>
    db
        .updatePlace(req.params.id, req.body)
        .then(successMessage => res.status(201).send(successMessage))
        .catch(error => {
            res.status(404);
            console.error(error, 'Error: Updating Place I Want To Go');
        })
);

Places.delete('/:id', (req, res) =>
    db
        .deletePlace(req.params.id)
        .then(successMessage => res.status(201).send(successMessage))
        .catch(error => {
            res.status(404);
            console.error(error, 'Error: Updating Place I Want To Go');
        })
);

module.exports = { Places };
