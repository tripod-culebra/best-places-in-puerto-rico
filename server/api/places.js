const { Router } = require('express');
const db = require('../db/index');

const Places = Router();

Places.post('/save', (req, res) =>
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
        .getTopPlacesGo()
        .then(results => res.status(201).send(results))
        .catch(error => {
            res.status(500);
            console.error(error, 'Error: Getting Places');
        })
);

Places.put('/update', (req, res) => {
    const changeId = Object.keys(req.body);
    db.updatePlaceGo(changeId)
        .then(response => {
            res.status(201).send(response);
        })
        .catch(error => {
            res.status(500);
            console.error(error, 'Error: Updating Place I Want To Go');
        });
});

Places.get('/been', (req, res) =>
    db
        .getTopPlacesBeen()
        .then(results => res.status(201).send(results))
        .catch(error => {
            res.status(500);
            console.error(error, 'Error: Getting Places');
        })
);

Places.delete(`/delete`, (req, res) => {
    const deleteId = Object.values(req.body);
    db.deletePlaceBeen(deleteId)
        .then(response => {
            res.status(201).send(response);
        })
        .catch(error => {
            res.status(500);
            console.error(error, 'Error: Deleting Place I Have Been');
        });
});

module.exports = {
    Places,
};
