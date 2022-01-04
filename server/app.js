const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const { Places } = require('./api/places');

const CLIENT_PATH = path.resolve(__dirname, '../build');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(CLIENT_PATH));

// app.use('/api/places', Places);

module.exports = {
    app,
};
