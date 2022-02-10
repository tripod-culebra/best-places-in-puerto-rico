const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Places } = require('./api/places');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../build')));
}

app.use('/api/places', Places);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = { app };
